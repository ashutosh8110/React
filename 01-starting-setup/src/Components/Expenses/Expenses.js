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

    const filteredExpenses = props.expenses.filter(x => {
        return x.date.getFullYear().toString() === filteredyear
    });

    let expenseContent = <p>No Expense found</p>

    if(filteredExpenses.length >0){
        expenseContent= filteredExpenses.map(expense => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredyear} 
                    onChangeFilter = {filterChangeHandler}
                />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;