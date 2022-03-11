import React, { useState } from "react";
import ExpenseForm from "./ExpenseForms";
import "./NewExpense.css";

const NewExpense = (props) => {
  const { onAppExpense } = props;
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onAppExpense(expenseData); //ovo se salje u App.js (child to parent)
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
