import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmt,setEnteredAmt]=useState(0);
    const [enteredDate,setEnteredDate]=useState();
    
    const titleChangeHandler = (event) => {
        console.log('Title Changed!');
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };
    const amtChangeHandler = (event) => {
        console.log('Amount Changed!');
        setEnteredAmt(event.target.value);
        console.log(enteredAmt);
    };

    const dateChangeHandler = (event) => {
        console.log('Amount Changed!');
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };
    
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amtChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>    
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;