import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js'

import './Expenses.css'

function Expenses(props)
{
    const expenses=props.expenses;
    return (
        <Card className="expenses">
            <ExpenseItem 
            title={expenses[0].title} 
            amount={expenses[0].amount} 
            date={expenses[0].date}/>

            <ExpenseItem 
            title={expenses[1].title} 
            amount={expenses[1].amount} 
            date={expenses[1].date}/>

            <ExpenseItem 
            title={expenses[2].title} 
            amount={expenses[2].amount} 
            date={expenses[2].date}/>

            <ExpenseItem 
            title={expenses[3].title} 
            amount={expenses[3].amount} 
            date={expenses[3].date}/>
        </Card>)
};

export default Expenses;