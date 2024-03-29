import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #bebebe;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
  @media (max-width: 610px) {
    font-size: 13px;
  }
`;
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding-top: ${(props) => (props.paddingTop ? "10px" : "")};
  display: flex;
  flex-direction: column;
  color: #0b2a68;
  font-weight: bold;
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding-top: 100px;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: #0b4ac0;

  &:hover {
    background-color: #0b4ac0ba;
    transition: all 0.3s;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;
