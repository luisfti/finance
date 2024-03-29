import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 15px;
  width: 30%;
  box-shadow: 0px 0px 10px #bebebe;

  @media (max-width: 795px) {
    width: 20%;
    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
  @media (max-width: 610px) {
    width: 10%;

    span {
      font-size: 15px;
    }
  }
  @media (max-width: 510px) {
    span {
      font-size: 12px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
    color: blueviolet;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Total = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #0b2a68;
`;
