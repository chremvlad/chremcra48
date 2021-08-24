import React, {useState} from "react";

import UpcomingDataForm from "./UpcomingDataForm";
import "./styles/UpcomingExpense.css";

//NewExpense - use props lifting data from child_UpcomingDataForm
const UpComingExpense = (props) => {
  //methods zone above return_area

  const [isEditing, setIsEditing] = useState(false);

  //Receive and Save lifting data from child_UpcomingDataForm
  const SaveUpComingDataHandler = (expenseliftData) => {
    const storeliftData = {
      ...expenseliftData,
      id: Math.random().toString(),
    };
    //console.log(storeliftData); //Test storing lifting form_data
    //forward data stored to App_parent
    props.onNewExpense(storeliftData);
    setIsEditing(false);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  //First step create parent props_function
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <UpcomingDataForm
          onSaveUpComingData={SaveUpComingDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default UpComingExpense;
