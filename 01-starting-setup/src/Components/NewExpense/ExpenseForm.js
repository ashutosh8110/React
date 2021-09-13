import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmt:'',
        enteredDate:''
    });
    
    const titleChangeHandler = (event) => {
        console.log('Title Changed!');
        setUserInput((prevState)=>{
            return {...prevState,enteredTitle:event.target.value};
        });
        console.log(userInput);
    };

    const amtChangeHandler = (event) => {
        console.log('Amount Changed!');
        setUserInput((prevState)=>{
            return {...prevState,enteredAmt:event.target.value};
        });
        console.log(userInput);
    };

    const dateChangeHandler = (event) => {
        console.log('Date Changed!');
        setUserInput((prevState)=>{
            return {...prevState,enteredDate:event.target.value};
        });
        console.log(userInput);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput);
        setUserInput(()=>{
            return {
                enteredTitle:'',
                enteredAmt:'',
                enteredDate:''
            };
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={userInput.enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        value={userInput.enteredAmt} 
                        onChange={amtChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={userInput.enteredDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
                
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>    
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;