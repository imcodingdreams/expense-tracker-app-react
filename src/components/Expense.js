import React from 'react'
import { ExpensesList } from './ExpensesList'

export default function Expense({ expenses, handleClickDelete }) {
  return (
    <div>
      <ExpensesList expenses={expenses} handleClickDelete={handleClickDelete} />
    </div>
  )
}
