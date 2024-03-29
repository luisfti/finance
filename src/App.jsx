import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import GlobalStyle from "./App.styles";
import Resume from "./components/resume/Resume";
import Form from "./components/form/Form";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

const App = () => {
  const [rendaList, setRendaList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenseMS, setExpenseMS] = useState(0);
  const [expenseES, setExpenseES] = useState(0);
  const [total, setTotal] = useState(0);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  //Recuoera os Dados em json
  useEffect(() => {
    fetch("http://localhost:5000/renda", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setRendaList(data);
        setFilteredList(filterListByMonth(data, currentMonth));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //Filtra as entradas de acordo com o tipo
    const amountIncome = rendaList
      .filter((item) => !item.tipo)
      .map((transaction) => Number(transaction.valor));
    
    //Filtra as saidas de acordo com o tipo  
    const amountExpense = rendaList
      .filter((item) => item.tipo)
      .map((transaction) => Number(transaction.valor));

    //Filtra as saidas de acordo com o tipo e periodo mensal
    const amountExpenseMS = rendaList
      .filter((item) => item.tipo)
      .filter((item) => item.periodo.includes("Fixo"))
      .map((transaction) => Number(transaction.valor));

    //Filtra as saidas de acordo com o tipo e periodo extra
    const amountExpenseES = rendaList
      .filter((item) => item.tipo)
      .filter((item) => item.periodo.includes("Extra"))
      .map((transaction) => Number(transaction.valor));

    //Soma os valores de cada lista
    const income = amountIncome.reduce((x, y) => x + y, 0).toFixed(2);
    const expense = amountExpense.reduce((x, y) => x + y, 0).toFixed(2);
    const expenseMS = amountExpenseMS.reduce((x, y) => x + y, 0).toFixed(2);
    const expenseES = amountExpenseES.reduce((x, y) => x + y, 0).toFixed(2);

    //Calcula as entradas menos as saidas
    const total = Math.abs(income - expense).toFixed(2);

    //Adiciona R$ aos valores exibidos
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setExpenseMS(`R$ ${expenseMS}`);
    setExpenseES(`R$ ${expenseES}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [rendaList]);

  //Atualiza os valores e passa para o arquiv json
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...rendaList, transaction];

    fetch("http://localhost:5000/renda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setRendaList(newArrayTransactions);
      })
      .catch((err) => console.log(err));
  };

  //Chamada do frontend
  return (
    <>
      <Header />
      <Resume
        income={income}
        expense={expense}
        expenseMS={expenseMS}
        expenseES={expenseES}
        total={total}
      />
      <Form
        handleAdd={handleAdd}
        transactionsList={rendaList}
        setTransactionsList={setRendaList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
