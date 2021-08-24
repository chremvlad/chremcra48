import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "../styles/Expenses.css";
import ExpensesList from "./ExpensesList";

//map(m=>m*2): transforms each element of the original array using a function parameter.
//const transArray = originalArray.map(function_parameter)

//note: props received from parent is an array_object
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterYearChangedHandler = (selectedYearOption) => {
    setFilteredYear(selectedYearOption);
  };
  //storing filtered props_items_expenses by year to a constant
  const filteredExpenses = props.items.filter((outLays) => {
    return outLays.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChanged={FilterYearChangedHandler}
        />
            <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
