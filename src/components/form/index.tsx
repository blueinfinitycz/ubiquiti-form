import styled from "styled-components";

export const Input = styled.input`
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const Label = styled.label`
  display: block;
  font-size: 17px;
  font-weight: bolder;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;
