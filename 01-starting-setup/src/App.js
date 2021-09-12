import Expense from './Components/Expenses/Expenses.js';
import NewExpense from './Components/NewExpense/NewExpense.js';
import './App.css';

function App() {
  const items= [
    {id:'e1',title:'Car Insurance',amount: 294.67,date: new Date(2021, 2,28)},
    {id:'e2',title:'Grocery',amount: 29.67,date: new Date(2021, 3,25)},
    {id:'e3',title:'Dress',amount: 364.34,date: new Date(2021, 4,29)},
    {id:'e4',title:'Choclate',amount: 192.67,date: new Date(2021, 5,3)},
  ]
  return (
    <div>
      <NewExpense/>
      <Expense expenses={items}/>
    </div>
  );
}

export default App;
