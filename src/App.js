import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import './App.css';
import { ExpensesListHeader } from './components/ExpensesListHeader';
import { AddExpense } from './components/AddExpense';
import { ExpensesList } from './components/ExpensesList';
import { v4 as uuid } from 'uuid';

//const LOCAL_STORAGE_KEY = 'expenseApp.expenses';

function App() {
  const [expenses, setExpenses] = useState([]);

  const expenseNameRef = useRef();
  const expenseAmountRef = useRef();
  const expenseDateRef = useRef();
  const expenseCategoryRef = useRef();
  const expensePaymentMethodRef = useRef();

  useEffect(() => {
    const storedExpenses = JSON.parse(window.localStorage.getItem('LOCAL_STORAGE_KEY'))
    if (storedExpenses) setExpenses(storedExpenses)
    console.log(storedExpenses)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(expenses))
  }, [expenses])

  function handleClickSave() {
    let paymentMethod = expensePaymentMethodRef.current.value;
    let date = expenseDateRef.current.value;
    let category = expenseCategoryRef.current.value;
    let name = expenseNameRef.current.value;
    let amount = expenseAmountRef.current.value;

    console.log(`Saved: ${paymentMethod}, ${date}, ${category}, ${name}, ${amount}`)

    if (paymentMethod === '' || category === '' || name === '' || amount === '') return
    setExpenses(prevExpenses => {
      return [...prevExpenses, {
        id: uuid(), paymentMethod: paymentMethod, date: date, category: category, name: name, amount: amount
      }]
    })
    // paymentMethod = null;
    // date = null;
    // category = null;
    // name = null;
    // amount = null;
  }

  const handleClickDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }
  return (
    <main className="app">
      <Header />
      <AddExpense handleClickSave={handleClickSave}
        expenseNameRef={expenseNameRef}
        expenseAmountRef={expenseAmountRef}
        expenseDateRef={expenseDateRef}
        expenseCategoryRef={expenseCategoryRef}
        expensePaymentMethodRef={expensePaymentMethodRef} />
      <ExpensesListHeader />
      <ExpensesList expenses={expenses} handleClickDelete={handleClickDelete} />
    </main>
  );
}

export default App;
