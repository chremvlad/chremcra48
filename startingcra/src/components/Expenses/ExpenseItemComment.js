//import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
//import Cards from "../UI/Card";
import "../styles/ExpenseItem.css";

//child - components function with props parameter
const ExpenseItem = (props) => {
  //here's above return method is the zone for adding javascript codes
  //before returning props_data output

  //use an array destructuring to store change of state on all attributes
  //using setStateFunction
 // const [name, setName] = useState(props.name);

  // const clickTitleHandler = () => {
  //   setName("Restaurant");
  //   // console.log("The button just was fired");
  //   // console.log(name);
  // };

  return (
    // <Cards className="expense-item">
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{name}</h2> */}
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/*event_listener: add a react listener on event, passing a pointer to the method*/}
      {/* <button onClick={clickTitleHandler}> Change Title</button> */}
    </div>
  );
};
export default ExpenseItem;
