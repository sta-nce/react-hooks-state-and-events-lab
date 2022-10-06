import React, { useState } from "react";

function Item({ name, category }) {
  const [itemCart,addCart] = useState(false)
  function handleClick() {
    addCart((checkItem)=>!checkItem)
    console.log(itemCart)
  }
  const ItemClass = itemCart ? "in-cart": " "
  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{itemCart? "Remove from Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
