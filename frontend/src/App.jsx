import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/homepage/HomePage.jsx";
import NonAlcoholicDrinks from "./components/Drinks/NonAlcoholicDrinks.jsx";
import AlcoholicDrinks from "./components/Drinks/AlcoholicDrinks.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alcoholic-drinks" element={<AlcoholicDrinks />} />
        <Route path="/nonalcoholic-drinks" element={<NonAlcoholicDrinks />} />
      </Routes>
    </Router>
  );
}

export default App;
