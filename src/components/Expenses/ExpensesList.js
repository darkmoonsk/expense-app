import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    return(
        <ul className="expenses-list">
            { //Se o array de despesas foi filtrado verifica se encontrou algum item de despesa correspondente
              props.filteredItems.length === 0 ?
                  <p className="expenses-list__fallback">Sem despesas encontradas</p> 
                  :
                  props.filteredItems.map((expense, index) => (
                  <ExpenseItem
                      key={index}
                      title={expense.title}
                      amount={expense.amount}
                      date={expense.date}
                  />
                  ))         
            }
        </ul>
    );
}

export default ExpensesList;