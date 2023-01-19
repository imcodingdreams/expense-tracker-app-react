import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import './App.css';
import { ExpensesListHeader } from './components/ExpensesListHeader';
import { AddExpense } from './components/AddExpense';
import { ExpensesList } from './components/ExpensesList';


function App() {
  const [expenses, setExpenses] = useState([
    {
      paymentMethod: "Card",
      date: "Dec 02, 2022",
      category: "Food",
      name: "Groceries",
      amount: "200.00",
      id: 1,
    },
    {
      paymentMethod: "Cash",
      date: "Dec 05, 2022",
      category: "Clothing",
      name: "Shirt",
      amount: "20.00",
      id: 2,
    },
    {
      paymentMethod: "Cryptocoin",
      date: "Nov 12, 2022",
      category: "Subscriptions",
      name: "Netflix",
      amount: "12.00",
      id: 3,
    }
  ]);
  //const expenseRef = useRef();

  const expenseNameRef = useRef();
  const expenseAmountRef = useRef();
  const expenseDateRef = useRef();
  const expenseCategoryRef = useRef();
  const expensePaymentMethodRef = useRef();

function handleClickSave(e) {
  console.log("Saved")
  console.log(paymentMethod, date, category, name, amount)
  const paymentMethod = expensePaymentMethodRef.current.value;
  const date = expenseDateRef.current.value;
  const category = expenseCategoryRef.current.value;
  const name = expenseNameRef.current.value;
  const amount = expenseAmountRef.current.value;
  
  //const newExpense = expenseRef.current.value;

  // const newExpense = (expenseNameRef.current.value, expenseAmountRef.current.value, expenseDateRef.current.value, expenseCategoryRef.current.value, expensePaymentMethodRef.current.value)
  setExpenses(prevExpenses => {
    return [...prevExpenses, { id: 1, paymentMethod: paymentMethod, date: date, category: category, name: name, amount: amount }]
  })
  paymentMethod.current.value = null;
  date.current.value = null;
  category.current.value = null;
  name.current.value = null;
  amount.current.value = null;
}

  const handleClickDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
    console.log("Deleted")
  }

  return (
    <main className="app">
      <Header />
      <AddExpense handleClickSave={handleClickSave} />
      <ExpensesListHeader />
      <ExpensesList expenses={expenses} handleClickDelete={handleClickDelete} />
      {/* <Expense expenses={expenses} handleClickDelete={handleClickDelete} /> */}
    </main>
  );
}

export default App;
