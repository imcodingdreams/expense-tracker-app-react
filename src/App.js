import React from 'react';
import { Header } from './components/Header';
import { NewExpenseInput } from './components/NewExpenseInput';
import { AmountDateInputs, CategoryPaymentInputs } from './components/Inputs';
import './App.css';
import { ExpensesListHeader } from './components/ExpensesListHeader';


function App() {
  return (
    <div className="App">
      <Header />
      <NewExpenseInput />
      <AmountDateInputs />
      <CategoryPaymentInputs />
      <ExpensesListHeader />
    </div>
  );
}

export default App;
