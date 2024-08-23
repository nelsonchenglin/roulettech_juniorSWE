import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-message-container">
        <h1>Welcome to Liquid Assets</h1>
        <h3>We have alcoholic and non-alcoholic beverages!</h3>
      </div>
      <nav>
        <li>
          <Link to="/alcoholic-drinks">Alcoholic Drinks Menu (21+)</Link>
          <Link to="/nonalcoholic-drinks">Regular Drinks Menu</Link>
        </li>
      </nav>
    </div>
  );
};

export default HomePage;
