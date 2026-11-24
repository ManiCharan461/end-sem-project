import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div>
      <h1>Food Delivery Menu</h1>
      <div className="menu">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default App;