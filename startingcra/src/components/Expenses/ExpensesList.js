import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../styles/ExpensesList.css";

const ExpensesList = (props) => {
  //let expenseFilterContent = <p>No expenses found</p>;
  //{filteredExpenses.length === 0 && <p>No expenses found</p>}

  if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>No expenses was found</h2>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((outlays) => (
        <ExpenseItem
          key={outlays.id}
          title={outlays.title}
          amount={outlays.amount}
          date={outlays.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
