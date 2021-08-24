import React, { useState } from "react";
//importing relatives files_components from the compnent folder annd attributive...
import Expenses from "./components/Expenses/Expenses";
import UpComingExpense from "./components/UpComingExpense/UpComingExpense";

//object1: create data source and object properties
const outlay = [
  {
    id: "i0",
    date: new Date(2021, 8, 8),
    title: "Car Insurance",
    amount: 294.67,
  },
  {
    id: "i1",
    date: new Date(2022, 8, 8),
    title: "School",
    amount: 250.67,
  },
  {
    id: "i2",
    date: new Date(2022, 8, 9),
    title: "Gazoline",
    amount: 344.0,
  },
  {
    id: "i3",
    date: new Date(2019, 8, 10),
    title: "Rent",
    amount: 1800.0,
  },
];

//parent props source is an array
const App = () => {
  //methods zone Above return_area
  //useState must allow change to data
  const [outlays, setOutlays] = useState(outlay);

  //object2: create method and object properties
  //Receive lifting_data from child_UpcomingExpense
  const NewExpenseHandler = (storeliftData) => {
    // const newExpenseData = {
    // ...storeliftData,
    // id: Math.random().toString()
    //Test storing new expenses data - lifting
    // console.log(storeliftData); //result data is arriving to parent.
    // };
    //console.log(newExpenseData)//result data is arriving to parent.
    //update change to previous data with useState constant_function
    setOutlays((prevOutlays) => {
      return [storeliftData, ...prevOutlays];
    });
  };

  /*all data properties are called props*/
  //First step create  parent props_function
  return (
    <div>
      <UpComingExpense onNewExpense={NewExpenseHandler} />

      {/* pass props array-items to child component*/}
      <Expenses items={outlays} />
    </div>
  );
};

export default App;
