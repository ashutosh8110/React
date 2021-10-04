import React,{ useState } from 'react';
import Expense from './Components/Expenses/Expenses.js';
import NewExpense from './Components/NewExpense/NewExpense.js';
import './App.css';

function App() {
  const initial_expenses= [
    {
      id:'e1',
      title:'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2,28)
    },
    {
      id:'e2',
      title:'Grocery',
      amount: 29.67,
      date: new Date(2021, 3,25)
    },
    {
      id:'e3',
      title:'Dress',
      amount: 364.34,
      date: new Date(2021, 4,29)
    },
    {
      id:'e4',
      title:'Choclate',
      amount: 192.67,
      date: new Date(2021, 5,3)
    },
  ]

  const [expenses,setExpenses]=useState(initial_expenses);

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    const expenseFormated={
      id: expense.id,
      title: expense.enteredTitle,
      amount: expense.enteredAmt,
      date: new Date(expense.enteredDate)
    }
    setExpenses(prevExpenses=>[expenseFormated,...prevExpenses]);
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
