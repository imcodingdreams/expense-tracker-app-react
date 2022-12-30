import React from 'react'

export const ExpensesList = ({expenses, handleClickDelete}) => {
  return (
    <div className='expenses-list'>
      {expenses.map(expense => (
        <div className="expense-ul" key={expense.id}>
          <ul>
            <li>{expense.paymentMethod}</li>
            <li>{expense.date}</li>
            <li>{expense.category}</li>
            <li>{expense.name}</li>
            <li>${expense.amount}</li>
            <button onClick={() => handleClickDelete(expense.id)}>X</button>
          </ul>
        </div>
      ))}
    </div>
  )
}
