
// // App1.js

// import React, { useState, useRef } from 'react';
// import ExpensesList2 from './components/ExpensesList2';
// import { AddExpense } from './components/AddExpense';
// import './App.css';
// import { Header } from './components/Header';
// import { ExpensesListHeader } from './components/ExpensesListHeader';
// //import { Expense } from './components/Expense';


// function App() {
//   const [expenses, setExpenses] = useState([
//     {
//       paymentMethod: "Card",
//       date: "Dec 02, 2022",
//       category: "Food",
//       name: "Groceries",
//       amount: "200.00",
//       id: 1,
//     },
//     // {
//     //   paymentMethod: "Cash",
//     //   date: "Dec 05, 2022",
//     //   category: "Clothing",
//     //   name: "Shirt",
//     //   amount: "20.00",
//     //   id: 2,
//     // },
//     // {
//     //   paymentMethod: "Cryptocoin",
//     //   date: "Nov 12, 2022",
//     //   category: "Subscriptions",
//     //   name: "Netflix",
//     //   amount: "12.00",
//     //   id: 3,
//     // }
//   ]);
//   // const expensePaymentMethodRef = useRef();
//   // const expenseDateRef = useRef();
//   // const expenseCategoryRef = useRef();
//   // const expenseNameRef = useRef();
//   // const expenseAmountRef = useRef();

//   // function handleClickSave() {
//   //   console.log("Saved")
//   //   const newExpense = expenses
//   //   if (newExpense === '') return
//   //   setExpenses(prevExpenses => {
//   //     return [...prevExpenses, { id: 1, newExpense: newExpense }]
//   //   })
//   //   expenses.current.value = null
//   // }


//   function handleSaveExpense(expensePaymentMethodRef, expenseDateRef, expenseCategoryRef, expenseNameRef, expenseAmountRef) {
//     const paymentMethod = expensePaymentMethodRef.current.value;
//     const date = expenseDateRef.current.value;
//     const category = expenseCategoryRef.current.value;
//     const name = expenseNameRef.current.value;
//     const amount = expenseAmountRef.current.value;
//     //console.log(expenses);
//     setExpenses(prevExpenses => {
//       return [...prevExpenses, { id: 1, paymentMethod: paymentMethod, date: date, category: category, name: name, amount: amount }];
//     })
//     paymentMethod.current.value = null;
//     date.current.value = null;
//     category.current.value = null;
//     name.current.value = null;
//     amount.current.value = null;
//   }

//   return (
//     <main className="app">
//       <Header />
//       <AddExpense handleSaveExpense={handleSaveExpense} />
//       <ExpensesListHeader />
//       <ExpensesList2 expenses={expenses} />
//     </main>
//   );
// }

// export default App;