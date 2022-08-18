import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    // state update depends on prevState
    setExpense((expense) => ({ ...expense, [name]: value }));
  };

  const { title, amount, date } = expense;

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    const { onSaveExpenseData } = props;

    onSaveExpenseData(expenseData);

    setExpense({
      title: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            onChange={changeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
