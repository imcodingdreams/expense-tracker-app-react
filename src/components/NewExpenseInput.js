import React from 'react';

export const NewExpenseInput = () => {
  return (
    <div className="expense-input">
      <input type="text" name="newExpense" id="newExpense" className="new-expense" placeholder="Expense" required/> 
      <button >Save</button>
    </div>
  )
}

