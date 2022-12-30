import React, { useState } from "react";
import { ExpensesList } from './ExpensesList';


export const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      paymentMethod: "Card",
      date: "Dec 02, 2022",
      category: "Food",
      name: "Groceries",
      amount: "200.00",
      id: 1,
    },
    {
      paymentMethod: "Cash",
      date: "Dec 05, 2022",
      category: "Clothing",
      name: "Shirt",
      amount: "20.00",
      id: 2,
    },
    {
      paymentMethod: "Cryptocoin",
      date: "Nov 12, 2022",
      category: "Subscriptions",
      name: "Netflix",
      amount: "12.00",
      id: 3,
    }
  ]);
  
  const handleClickDelete = (id) => {
      const newExpenses= expenses.filter(expense => expense.id !== id);
      setExpenses(newExpenses);
      console.log("Deleted")
  }

  return (
    <div>
      <ExpensesList expenses={expenses} handleClickDelete={handleClickDelete}/>
    </div>
  );
}

// handleClickDelete = { handleClickDelete }

//   return (
//     <div>
//       {expenses.map(expense => (
//         <Expense
//           paymentMethod={expense.paymentMethod}
//           date={expense.date}
//           category={expense.category}
//           name={expense.name}
//           amount={expense.amount}
//         />
//       ))}
//     </div>
//   )
// }


