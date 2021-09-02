import Card from '../UI/Card.js'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'


function ExpenseItem(props){
    function* clickHandler(){
        var i=0;
        while(true){
          yield i;
          i=i+1;
        }
      } 
      let generator= clickHandler();
    return (
        <Card className="expense-item" >
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{'$'+props.amount}</div>
            </div>
            <button onClick={()=>{console.log('Clicked ' + generator.next().value)}}>Change Title</button>
    
        </Card>
    );
}

export default ExpenseItem;