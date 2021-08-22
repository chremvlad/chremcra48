import React, { useState } from "react";

import "./styles/UpcomingDataForm.css";

//ExpenseForm - child of UpcomingExpense
const UpcomingDataForm = (props) => {
  //option1: save state data changed
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = (event) => {
    return setInputTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    //console.log('Test in amountHandler')
    return setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    //console.log('Test in dateHandler')
    return setInputDate(event.target.value);
  };

  //Storing input entered_data by create a method for submit_form_listener
  const submitHandler = (event) => {
    event.preventDefault();
    //storing entered data from users_event
    const expenseLiftData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    //Second step call parent props_function to forward storing data
    //console.log(expenseLiftData);
    //lifting stored entered_data to parent_UpcomingExpense
    props.onSaveUpComingData(expenseLiftData);

    setInputAmount("");
    setInputDate("");
    setInputTitle("");
  };
  // add two way value_binding to props
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title:</label>
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
