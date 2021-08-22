import React from "react";
import ExpenseItem from "./ExpenseItem";
//import Card from "../UI/Card";

import "../styles/Expenses.css";

//note: props receive from parent as like an array listing
const Expenses = (props) => {
    return(
        <div className='expenses'>
        <ExpenseItem
          date={props.items[0].date}
          name={props.items[0].name}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          name={props.items[1].name}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          name={props.items[2].name}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          date={props.items[3].date}
          name={props.items[3].name}
          amount={props.items[3].amount}
       />
      </div>
    );
 
};

export default Expenses;
