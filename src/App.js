import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // funkcija se koristi za setExpense jer se mijenja postojeci expense
      //koji zavisi od proslog
      return [expense, ...prevExpenses]; // na pocetak liste ide novo dodani item expense
    });
  };
  return (
    <div>
      <NewExpense onAppExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
