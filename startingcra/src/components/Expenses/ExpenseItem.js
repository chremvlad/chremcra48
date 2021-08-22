import React from "react";
import ExpenseDate from "./ExpenseDate";

import "../styles/ExpenseItem.css";

//child1 - components function using props parameter
const ExpenseItem = (props) => {
 
  return (
    
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">      
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    
    </div>
  );
};
export default ExpenseItem;
