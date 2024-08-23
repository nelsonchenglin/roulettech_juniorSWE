import React, { useState, useEffect } from "react";
import { getAlcoholicDrinks } from "../../services/api";
import { handleCreate, handleDelete } from "../../services/buttonUtilities";

const AlcoholicDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const data = await getAlcoholicDrinks();
        setDrinks(data);
      } catch (e) {
        console.error("Error retrieving alcoholic drinks:", e);
      }
    };
    getDrinks();
  }, []);

  return (
    <div className="cocktails-container">
      <h1>Liquid Asset Cocktails</h1>
      <div className="cocktail-row">
        <ul>
          {drinks.map((drink) => (
            <li key={drink.id}>
              {drink.name}
              <button onClick={() => handleDelete(drink.id, drinks, setDrinks)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlcoholicDrinks;
