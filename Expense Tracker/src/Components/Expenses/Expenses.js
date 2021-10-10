import React,{ useState } from 'react';
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpenseChart from './ExpenseChart.js'; 
import './Expenses.css'

const Expenses = (props) => {
    const [ filteredyear, setFilteredYear ] = useState('2020');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(x => {
        return x.date.getFullYear().toString() === filteredyear
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredyear} 
                    onChangeFilter = {filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;