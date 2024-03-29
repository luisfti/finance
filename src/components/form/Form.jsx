import React, { useState } from "react";
import Grid from "../grid/Grid";
import * as css from "./Form.styles";

function Form({ handleAdd, transactionsList, setTransactionsList }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("");
  const [isExpense, setExpense] = useState(false);

  const options = [
    {
      label: "Fixo",
      value: "Fixo",
    },
    {
      label: "Extra",
      value: "Extra",
    },
  ];

  const generateID = transactionsList.length + 1;

  //Adiciona novos dados ao banco
  const handleSave = () => {
    //Verifica se os dados foram preenchidos corretamente
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (!date) {
      alert("Informe a data!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    //Formata a data
    const dateFormat = date.substr(8, 2) + "/" + date.substr(5, 2) + "/" + date.substr(0, 4);

    const transaction = JSON.stringify({
      id: generateID,
      descricao: desc,
      valor: amount,
      periodo: period ? period : "Fixo",
      data: dateFormat,
      tipo: isExpense,
    });

    //Salva os dados
    handleAdd(JSON.parse(transaction));
    //Zera o dados do formulario
    setDesc("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <css.Container>
        <css.InputContent>
          <css.Label>Descrição</css.Label>
          <css.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <css.Label paddingTop>Valor</css.Label>
          <css.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </css.InputContent>
        <css.InputContent>
          <css.Label>Data</css.Label>
          <css.Input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <css.Label paddingTop>Período</css.Label>
          <css.Select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </css.Select>
        </css.InputContent>

        <css.RadioGroup>
          <css.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <css.Label htmlFor="rIncome">Entrada</css.Label>
          <css.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <css.Label htmlFor="rExpenses">Saída</css.Label>
        </css.RadioGroup>
        <css.Button onClick={handleSave}>ADICIONAR</css.Button>
      </css.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
}

export default Form;
