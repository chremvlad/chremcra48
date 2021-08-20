
import React from 'react'
//import relatives files_components from the compnent folder...
import ExpenseItem from "./components/Expenses/ExpenseItem";

//parent
const App=()=> {
  //data object - properties
  const expenses = [
    {
      id: "i0",
      date: new Date(2021, 8, 8),
      name: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "i1",
      date: new Date(2021, 8, 8),
      name: "School",
      amount: 250.67,
    },
    {
      id: "i2",
      date: new Date(2021, 8, 9),
      name: "Gazoline",
      amount: 344.0,
    },
    {
      id: "i3",
      date: new Date(2021, 8, 10),
      name: "Rent",
      amount: 1800.0,
    },
  ];

  return (
    <div>
      {/*all attributes of data properties call props*/}
      <ExpenseItem
        dat={expenses[0].date}
        name={expenses[0].name}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        dat={expenses[1].date}
        name={expenses[1].name}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        dat={expenses[2].date}
        name={expenses[2].name}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        dat={expenses[3].date}
        name={expenses[3].name}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
