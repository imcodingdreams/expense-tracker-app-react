import React from 'react'

export const AmountDateInputs = () => {
  return (
    <div className="amount-date-inputs">
      <input type="number" name="number" min="1" step=".01" placeholder="Amount" id="expenseAmount" className="expense-amount" required/>  
      <input type="date" name="date" id="expenseDate" className="expense-date" placeholder="Choose date" required/>  
    </div>
  )
}


export const CategoryPaymentInputs = () => {
  return (
    <div className="category-payment-inputs">
      <select name="category" id="expenseCategory" className="expense-category" required>
          <option value="" disabled selected hidden>Category</option>
          <option>Food</option>
          <option>Personal Care</option>
          <option>Medical</option>
          <option>Subscriptions</option>
          <option>Housing</option>
          <option>Clothing</option>
          <option>Kids</option>
          <option>Fun</option>
          <option>Gifts</option>
          <option>Utilities</option>
          <option>Insurance</option>
          <option>House Supplies</option>
          <option>Pets</option>
          <option>Debt</option>
          <option>Other</option>
      </select>
      <select name="payment" id="paymentMethod" className="payment-method" required>
          <option value="" disabled selected hidden>Payment Method</option>
          <option>Card</option>
          <option>Cash</option>
          <option>Cryptocoin</option>
          <option>Other</option>
      </select>
    </div>
  )
}

