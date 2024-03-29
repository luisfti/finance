import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  border-bottom: ${(props) => (props.border ? "1px solid #a7a7a765" : "")};
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  p {
    color: ${(props) => (props.tipo ? "red" : "")};
  }
  svg {
    margin-left: ${(props) => (props.left ? "8px" : "0px")};
    width: 18px;
    height: 18px;
    cursor: ${(props) => (props.trash ? "pointer" : "")};
    color: ${(props) => (props.trash ? "#0b4ac0" : "")};
    padding: ${(props) => (props.pad ? "0px 10px" : "")};
    &:hover {
      color: #0b4ac0ba;
      transition: all 0.3s;
    }
  }
  @media (max-width: 520px) {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;
