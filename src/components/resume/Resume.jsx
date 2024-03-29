import React from "react";
import * as css from "./Resume.styles";
import ResumeItem from "../resumeItem/ResumeItens";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, expenseMS, expenseES, total }) => {
  return (
    <css.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas Ms"
        Icon={FaRegArrowAltCircleDown}
        value={expenseMS}
      />
      <ResumeItem
        title="Saídas Es"
        Icon={FaRegArrowAltCircleDown}
        value={expenseES}
      />
      <ResumeItem
        title="Saídas Ts"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </css.Container>
  );
};

export default Resume;
