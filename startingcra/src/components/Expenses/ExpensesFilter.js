import React from "react";

import "../styles/ExpenseFilter.css";

//child of Expenses - with event_listener_onChange
//child function_listener and parent function_listener
//activate two way value binding in the <jsx element_select> to save selected year
const ExpensesFilter = (props) => {
  const changeHandler = (event) => {
    props.onFilterChanged(event.target.value);
  };
  //combo_option to select year_value
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
