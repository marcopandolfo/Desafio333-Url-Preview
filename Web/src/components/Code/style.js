import styled from "styled-components";

export const Button = styled.button`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  border: 5px solid ${red => (red ? `#123` : `#fff`)};
  background: #505bda;
  height: 56px;
  border-radius: 5px;
  width: 100%;
  transition: 2s;
  &:hover {
    background: #3e47b0;
    transition: 2s;
  }
`;
