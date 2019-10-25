import styled from "styled-components";

export const Button = styled.button`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background: ${({ red }) => (red ? `var(--color-red)` : `var(--color-green)`)};
  height: 56px;
  border-radius: 5px;
  width: 100%;
  transition: 2s;
  border: none;
  &:hover {
    filter: brightness(85%);
    transition: 2s;
  }
  svg {
    vertical-align: middle;
    font-size: 25px;
  }
`;
