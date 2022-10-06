import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setselectCategory] = useState("All")
  const categoryDisplay = items.filter((element)=> {
    if (selectedCategory === "All")
    {
      return true
    }
    else{
      return element.category === selectedCategory
    }
  })
  function handleChange(event){
    setselectCategory(event.target.value)
  }
  console.log(selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
