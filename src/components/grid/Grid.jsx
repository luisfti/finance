import React from "react";
import GridItem from "../gridItem/GridItem";
import * as css from "./Grid.styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    const deletItem = itens.filter((transaction) => transaction.id == ID).map((transaction) => Number(transaction.id));

    fetch(`http://localhost:5000/renda/${deletItem}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArray),
    })
      .then((response) => response.json())
      .then((data) => {
        setItens(newArray);
      })
      .catch((err) => console.log(err));
  };

  return (
    <css.Table>
      <css.Thead>
        <css.Tr>
          <css.Th width={24}>Descrição</css.Th>
          <css.Th width={20}>Valor</css.Th>
          <css.Th width={16}>Período</css.Th>
          <css.Th width={15}>Data</css.Th>
          <css.Th width={10}>Tipo</css.Th>
          <css.Th width={0} flex alignCenter left>
            <FaArrowAltCircleLeft />
            <p>06/2023</p>
            <FaArrowAltCircleRight />
          </css.Th>
        </css.Tr>
      </css.Thead>
      <css.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </css.Tbody>
      <css.Space></css.Space>
    </css.Table>
  );
};

export default Grid;
