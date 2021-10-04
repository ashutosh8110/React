import react,{ useState } from 'react';
import Card from '../UI/Card.js'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'


function ExpenseItem(props){
    console.log("state change");
    const [title,seTitle]=useState(props.title);
    console.log('Evaluation');
    function clickHandler(){
        seTitle("updated");
        console.log(title);
      } 
    return (
        <Card className="expense-item" >
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{'$'+props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
    
        </Card>
    );
}

export default ExpenseItem;

