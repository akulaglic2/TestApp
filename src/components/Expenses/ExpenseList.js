import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
