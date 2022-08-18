import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    const { onAddExpenseHandler } = props;
    // console.log(expense);
    onAddExpenseHandler(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
