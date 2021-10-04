import React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css'

const Expenses = (props) => {
    const [ filteredyear, setFilteredYear ] = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
        
    }
    const expenses=props.expenses;
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredyear} onChangeFilter = {filterChangeHandler}/>
                {expenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
        )
};

export default Expenses;