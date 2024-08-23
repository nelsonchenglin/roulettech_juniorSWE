import React, { useState, useEffect } from "react";

import { getNonAlcoholicDrinks } from "../../services/api";
import { handleCreate, handleDelete } from "../../services/buttonUtilities";

import "./styles.css";

function NonAlcoholicDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    alcohol: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value === "true"
          ? true
          : e.target.value === "false"
          ? false
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const decimalPrice = parseFloat(form.price).toFixed(2);
    const formData = { ...form, price: parseFloat(decimalPrice) };
    await handleCreate(formData, drinks, setDrinks);
    setForm({
      name: "",
      description: "",
      price: "",
      alcohol: false,
    });
  };

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const data = await getNonAlcoholicDrinks();
        setDrinks(data);
      } catch (e) {
        console.error("Error retrieving alcoholic drinks:", e);
      }
    };
    getDrinks();
    console.log(drinks);
  }, []);

  return (
    <div className="bevs-container">
      <h1>Liquid Asset Drinks</h1>
      <ul>
        {drinks.map((drink) => (
          <div className="bevs-list" key={drink.id}>
            <div className="name-and-price-row">
              <li className="bev-name">{drink.name}</li>
              <p className="bev-price">{drink.price}</p>
            </div>
            <div className="description-delete-btn-row">
              <p className="bev-desc">{drink.description}</p>
              <button onClick={() => handleDelete(drink.id, drinks, setDrinks)}>
                Delete
              </button>
            </div>{" "}
          </div>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            step="0.01"
            name="price"
            id="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="alcohol">Contains Alcohol:</label>
          <select
            id="alcohol"
            name="alcohol"
            value={form.alcohol.toString()}
            onChange={handleChange}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Drink</button>
        </div>
      </form>
    </div>
  );
}

export default NonAlcoholicDrinks;
