import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const cartClass = cart? "in-cart" : ""

  const handleClick = () => {
    setCart(!cart)
  }

  return (
    <li className= {cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart? "Remove from Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
