import React from'react'
import ExpenseDate from "./ExpenseDate";
import "../styles/ExpenseItem.css";


//child
//components function with props parameter
const ExpenseItem=(props)=> {
  //zone for adding javascript codes before returning props_data output
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate dat={props.dat} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
