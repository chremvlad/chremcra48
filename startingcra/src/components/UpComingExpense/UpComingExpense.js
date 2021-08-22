import React from "react";

import UpcomingDataForm from "./UpcomingDataForm";
import "./styles/UpcomingExpense.css";

//NewExpense - use props lifting data from child_UpcomingDataForm
const UpComingExpense = () => {
  //methods zone
  const SaveUpComingDataHandler = (expenseliftData) => {
    const storeliftData = {
      ...expenseliftData,
      id: Math.random().toString()
    };
    console.log(storeliftData);
  };
  //First step create parent props_function
  return (
    <div className="new-expense">
      <UpcomingDataForm onSaveUpComingData={SaveUpComingDataHandler} />
    </div>
  );
};

export default UpComingExpense;
