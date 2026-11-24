function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.image} />
      <h3>{food.name}</h3>
      <h4>Price: ₹{food.price}</h4>
      <button>Order Now</button>
    </div>
  );
}

export default FoodCard;