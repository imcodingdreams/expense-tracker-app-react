import React, { useState } from 'react';
import { Header } from './components/Header';
import './App.css';
import { ExpensesListHeader } from './components/ExpensesListHeader';
import { AddExpense } from './components/AddExpense';
import { Expenses } from './components/Expenses';

function App() {
  return (
    <main className="app">
      <Header />
      <AddExpense />
      <ExpensesListHeader />
      <Expenses />
    </main>
  );
}

export default App;
