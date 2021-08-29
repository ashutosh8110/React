import logo from './logo.svg';
import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App() {
  const expenses= [
    {id:'e1',title:'Car Insurance',amount: 294.67,date: new Date(2021, 2,28)},
    {id:'e2',title:'Grocery',amount: 29.67,date: new Date(2021, 3,25)},
    {id:'e3',title:'Dress',amount: 364.34,date: new Date(2021, 4,29)},
    {id:'e4',title:'Choclate',amount: 192.67,date: new Date(2021, 5,3)},
  ]
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
