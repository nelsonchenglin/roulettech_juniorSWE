import { deleteDrink, createDrink } from "./api"; // Import the deleteDrink function from your API helper file

export const handleDelete = async (id, beverages, setBeverages) => {
  setDeleting(id);
  try {
    await deleteDrink(id);
    setBeverages(beverages.filter((beverage) => beverage.id !== id));
  } catch (error) {
    console.error("Error deleting drink:", error);
  }
};

export const handleCreate = async (newBeverage, beverages, setBeverages) => {
  try {
    const createdBeverage = await createDrink(newBeverage);
    setBeverages([...beverages, createdBeverage]);
  } catch (e) {
    console.error("Error creating drink:", e);
  }
};
