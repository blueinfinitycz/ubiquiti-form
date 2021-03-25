import React from 'react';
import styled from 'styled-components';

const FormTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin: 0px;
  margin-bottom: 1rem;
`;

interface IProps {
  text: string;
}

const FormHeader = ({ text }: IProps): JSX.Element => {
  return <FormTitle>{text}</FormTitle>;
};

export default FormHeader;
