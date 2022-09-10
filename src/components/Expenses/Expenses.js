import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("all");
  let filteredItems = [];

  function filterChangeHanlder(selectedYear) {
    setFilteredYear(selectedYear);
  }
  
// Filtra as despesas se o usuario selecinou algum ano especifico  
if(filteredYear !== "all") {
  filteredItems = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  console.log(filteredItems);
}else {
  filteredItems = props.items;
}
    
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHanlder}
        />

        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={props.items} filteredItems={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
