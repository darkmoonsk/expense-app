import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPANSES = [
  {
    id: 'e1',
    title: 'Camisa nova',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Geladeira',
    amount: 1294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Novo escritorio',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Xbox series',
    amount: 2500,
    date: new Date(2021, 8, 18),
  },
  
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPANSES);

  const addExpenseHandler = (expense) => {
/*     console.log("in app.js")
    console.log(expense); */
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <div>     
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
