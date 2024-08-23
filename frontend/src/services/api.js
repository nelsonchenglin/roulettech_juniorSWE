import axios from "axios";

const API_BASE = "http://localhost:8000/api/products";

export const getAlcoholicDrinks = async () => {
  try {
    const res = await axios.get(`${API_BASE}/alcohol/`);
    return res.data;
  } catch (e) {
    console.error("Problem getting alcoholic drinks.", e);
  }
};

export const getNonAlcoholicDrinks = async () => {
  try {
    const res = await axios.get(`${API_BASE}/non-alcohol/`);
    return res.data;
  } catch (e) {
    console.error("Problem getting non-alcoholic drinks.", e);
  }
};

export const createDrink = async (newBeverage) => {
  try {
    newBeverage.price = parseFloat(newBeverage.price).toFixed(2);
    const res = await axios.post(`${API_BASE}/`, newBeverage);
    return res.data;
  } catch (e) {
    console.error(
      "Problem creating drink. Ensure data object being sent has following fields: name: String, description: String, price: Number",
      e
    );
  }
};

export const deleteDrink = async (id) => {
  try {
    const res = await axios.delete(`${API_BASE}/${id}/`);

    console.log("Drink Deleted:", res.data);
    return res.data;
  } catch (e) {
    console.error("Problem deleting drink", e);
  }
};
