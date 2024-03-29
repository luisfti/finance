import React from "react";
import * as css from "./GridItem.styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaPen,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <css.Tr>
      <css.Td border>{item.descricao}</css.Td>
      <css.Td border tipo={item.tipo}>
        <p>{"R$ " + Number(item.valor).toFixed(2)}</p>
      </css.Td>
      <css.Td border>{item.periodo}</css.Td>
      <css.Td border>{item.data}</css.Td>
      <css.Td border left>
        {item.tipo ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </css.Td>
      <css.Td trash alignCenter pad>
        <FaPen />
        <FaTrash onClick={() => onDelete(item.id)} />
      </css.Td>
    </css.Tr>
  );
};

export default GridItem;
