import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
  }

  const handleChangeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleChangeDate = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "T00:00:00"),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleChangeTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleChangeAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2015/01/01"
            max="2030/12/31"
            value={enteredDate}
            onChange={handleChangeDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancelar</button>
        <button type="submit">Adicionar despesa</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
