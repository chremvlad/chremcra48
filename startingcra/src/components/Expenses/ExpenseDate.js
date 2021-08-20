import React from 'react'
import '../styles/ExpenseDate.css'
//grand child
const ExpenseDate=(props)=> {
  //javascript codes-area before output props_data
  const month = props.dat.toLocaleString("en-US", { month: "long" });
  const day = props.dat.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dat.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );

 
}
export default ExpenseDate
