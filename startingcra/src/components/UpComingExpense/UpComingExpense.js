import React from "react";

import UpcomingDataForm from "./UpcomingDataForm";
import "./styles/UpcomingExpense.css";

//NewExpense - use props lifting data from child_UpcomingDataForm
const UpComingExpense = (props) => {
  
  //methods zone above return_area 
  //Receive and Save lifting data from child_UpcomingDataForm
  const SaveUpComingDataHandler = (expenseliftData) => {
    const storeliftData = {
      ...expenseliftData,
      id: Math.random().toString()
    };
    //console.log(storeliftData); //Test storing lifting form_data
    //forward data stored to App_parent
    props.onNewExpense(storeliftData)
  };
  //First step create parent props_function 
  return (
    <div className="new-expense">
      <UpcomingDataForm onSaveUpComingData={SaveUpComingDataHandler} />
    </div>
  );
};

export default UpComingExpense;
