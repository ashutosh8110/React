import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css'

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random()*11).toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing,setIsEditing] = useState(false);
    
    const startEditing = () => { setIsEditing(true) };
    
    const cancelHandler = () => { setIsEditing(false) }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add Expense</button>}
            {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
        </div>
    );
};

export default NewExpense;
