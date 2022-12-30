import React from 'react'
// import { NewExpense } from './NewExpense'

export const ExpensesListHeader = () => {
  return (
    <div className='expenses-list-header'>
      <h4>Expenses List</h4>
      <ul>
        <li>Payment</li>
        <li>Date</li>
        <li>Category</li>
        <li>Expense</li>
        <li>Amount</li>
        <li>Delete</li>
      </ul>
    </div>
  )
}
