import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, SetIsEditing] = useState(false);

  const showFormHandler = () => {
    SetIsEditing(true);
  };

  const hideFormHandler = () => {
    SetIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  if (!isEditing) {
    return (
      <div className="new-expense">
        <button type="button" onClick={showFormHandler}>
          Add new expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={hideFormHandler}
      />
    </div>
  );
};

export default NewExpense;
