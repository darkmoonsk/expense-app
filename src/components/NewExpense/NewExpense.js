import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  }

  const newExpenseHandler = () => setAddNewExpense(true);
  const cancelNewExpense = () => setAddNewExpense(false);

  return (
    <div className="new-expense">
      {
      addNewExpense? 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelNewExpense}></ExpenseForm>
      :
        <button onClick={newExpenseHandler}>Adicionar despesa</button>
      }  
    </div>
  );
}

export default NewExpense;
