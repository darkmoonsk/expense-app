import "./ExpenseItem.css";
import Date from "./Date"
import Card from "../UI/Card"

function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <Date date={props.date}></Date>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            
            </Card>
        </li>
    );
}

export default ExpenseItem;