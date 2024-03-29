import React from "react";
import * as css from "./ResumeItens.styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <css.Container>
      <css.Header>
        <css.HeaderTitle>{title}</css.HeaderTitle>
        <Icon />
      </css.Header>
      <css.Total>{value}</css.Total>
    </css.Container>
  );
};

export default ResumeItem;
