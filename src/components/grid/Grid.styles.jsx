import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  /* background-image: linear-gradient(
    to right,
    #fff 0%,
    #fff 84%,
    #0b4ac049 84%,
    #0b4ac049 100%
  ); */
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px #bebebe;
  border-radius: 10px;
  max-width: 1120px;
  margin: 20px auto;

  @media (max-width: 520px) {
    th,
    td {
      font-size: 11px;
    }
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 10px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
  height: 50px;
  display: ${(props) => (props.flex ? "flex" : "")};
  align-items: ${(props) => (props.alignCenter ? "center" : "")};
  margin-left: ${(props) => (props.left ? "10px" : "")};

  p {
    width: 80px;
  }

  svg {
    margin: 0px 5px 0px 5px;
    /* margin-top: 10px; */
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #0b4ac0;
    &:hover {
      color: #0b4ac0ba;
      transition: all 0.3s;
    }
  }
`;

export const Space = styled.div`
  height: 30px;
`;
