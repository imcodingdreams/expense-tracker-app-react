import React from 'react'
import { useState } from 'react'

export const AddExpense = (props) => {

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  
const handleSubmit = (e) => {
  e.preventDefault();
  // const expense = { expenseName, expenseAmount, expenseDate, expenseCategory, paymentMethod };
  // console.log(expense)
  // props.createNewExpense(expense);
}

  // const handleClickSave = (e) => {
  //   setExpenseName(e.target.value);
  //   console.log ("Saved")
  // }
  return (
    <form className="add-expense" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="expenseName" 
        id="expenseName" 
        value={expenseName} 
        className="expense-name" 
        placeholder="Expense" 
        onChange={(e) => setExpenseName(e.target.value)}
        required
      /> 
      <button className="save-button">Save</button>
      {/* <button className="save-button" onClick={handleClickSave}>Save</button> */}
      <input 
        type="number" 
        name="number" 
        min="1" 
        step=".01" 
        placeholder="Amount" 
        id="expenseAmount" 
        value= {expenseAmount} 
        className="expense-amount" 
        onChange={(e) => setExpenseAmount(e.target.value)}
        required
      />  
      <input 
        type="date" 
        name="date" 
        id="expenseDate" 
        value= {expenseDate} 
        className="expense-date" 
        placeholder="Choose date"
        onChange={(e) => setExpenseDate(e.target.value)} 
        required
      />
      <select 
        name="category" 
        id="expenseCategory" 
        value= {expenseCategory}
        className="expense-category"
        onChange={(e) => setExpenseCategory(e.target.value)}  
        required
      >
          <option value="" disabled selected hidden>Category</option>
          <option value= "Food">Food</option>
          <option value= "Personal Care">Personal Care</option>
          <option value= "Medical">Medical</option>
          <option value= "Subscriptions">Subscriptions</option>
          <option value= "Housing">Housing</option>
          <option value= "Clothing">Clothing</option>
          <option value= "Kids">Kids</option>
          <option value= "Fun">Fun</option>
          <option value= "Gifts">Gifts</option>
          <option value= "Utilities">Utilities</option>
          <option value= "Insurance">Insurance</option>
          <option value= "House Supplies">House Supplies</option>
          <option value= "Pets">Pets</option>
          <option value= "Debt">Debt</option>
          <option value= "Other">Other</option>
      </select>
      <select 
        name="payment" 
        id="paymentMethod" 
        value= {paymentMethod}
        className="payment-method" 
        onChange={(e) => setPaymentMethod(e.target.value)} 
        required
      >
          <option value="" disabled selected hidden>Payment Method</option>
          <option value= "Card">Card</option>
          <option value= "Cash">Cash</option>
          <option value= "Cryptocoin">Cryptocoin</option>
          <option value= "Other">Other</option>
      </select>
    </form>
  )
}


