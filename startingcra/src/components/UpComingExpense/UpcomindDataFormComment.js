import React, { useState } from "react";

import "./styles/UpcomingDataForm.css";

//ExpensForm
const UpcomingDataForm = (props) => {
  //Zone to create methods for every event_listener
  //A-use state for saving all the target-values
  //make sure storing all input from using imported {useState}
  //option1: save data changed
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //Alternative approach use one useState - What's better?
  //option2:save data changed
  //   const [userInputs, setUserInputs] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  //B-Create methods to handle input_event provides by browsers
  //return wthin each listener the set-UseState function
  //with argument from the event-target-value
  //option1:
  const titleChangeHandler = (event) => {
    // console.log("test Handler Title about to change or parameter event-see target-value:?" )
    // console.log(event.target.value)
    return setInputTitle(event.target.value);
  };

  //option2:
  // const titleChangeHandler = (event) => {
  // setUserInputs({
  //   ...userInputs,
  //   inputTitle: event.target.value,
  // });

  //safer way whenever you data depends on the previous state
  // setUserInputs((prevState)=>{
  //     return({...prevState, inputTitle: event.target.value})

  // })

  const amountChangeHandler = (event) => {
    //console.log('amountHandler')
    return setInputAmount(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   inputAmount: event.target.value,
    // });
    //or do it in safer way...
  };

  const dateChangeHandler = (event) => {
    //console.log('dateHandler')
    return setInputDate(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   inputDatet: event.target.value,
    // });
    //or do it in safer way...
  };

  //Storing input entered data by create a method for submit_form_listener
  const submitHandler = (event) => {
    //must automatically has an event_parameter
    event.preventDefault(); // stand for request only
    //create an expense_object with properties that existed to store entered data
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    console.log(expenseData);
    //clear the input form label after submitted
    setInputAmount("");
    setInputDate("");
    setInputTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      {/* add event_listener to attribute for every key stroke show up with label */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title:</label>
          {/* add two way value binding to attribute for every key stroke show up with label */}
          <input type="text" onChange={titleChangeHandler} value={inputTitle} />
        </div>
        <div className="new-expense__control">
          <label> Amount:</label>
          <input
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label> Date:</label>
          <input
            type="date"
            value={inputDate}
            onChange={dateChangeHandler}
            min="2021-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default UpcomingDataForm;
