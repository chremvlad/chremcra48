
import React from 'react'
//importing relatives files_components from the compnent folder annd attributive...
import Expenses from "./components/Expenses/Expenses";

import UpComingExpense from './components/UpComingExpense/UpComingExpense';

//parent props source is an array
const App=()=> {
  //data object - properties
  const outlays = [
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
    /*all data properties are called props*/
    <div>


      <UpComingExpense />


      {/* props for array-items */}
      <Expenses items={outlays}/>
      
    </div>
  );
}

export default App;
