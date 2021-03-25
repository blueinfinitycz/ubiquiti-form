import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  className?: string;
  type?: 'button' | 'submit';
  children?: string;
  onClick?: () => void;
  primary?: boolean;
  loading?: boolean;
}

const SButton = styled.button<{ $primary?: boolean; $loading?: boolean }>`
  text-transform: uppercase;
  font-weight: 700;
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid #0077b3;
  letter-spacing: 0.15em;
  box-shadow: 0 1px 3px rgba(0, 82, 133, 0.2);
  color: #005285;
  background-color: #ffffff;
  cursor: pointer;
  margin: 15px;

  ${({ $primary }) =>
    $primary &&
    css`
      color: #ffffff;
      background-color: #0077b3;

      &:active {
        background-color: #016496;
      }
    `}

  ${({ $loading }) =>
    $loading &&
    css`
      opacity: 0.8;
    `}
`;

const LoadingIcon = styled(LoadingOutlined)`
  margin-right: 1em;
`;

const Button = ({ type, className, children, onClick, primary, loading }: IProps): JSX.Element => (
  <SButton type={type === 'submit' ? 'submit' : 'button'} className={className} onClick={onClick} disabled={loading} $loading={loading} $primary={primary}>
    {loading && <LoadingIcon spin={true} />}
    {children}
  </SButton>
);

Button.defaultProps = {
  children: undefined,
  className: undefined,
  onClick: undefined,
  primary: false,
  loading: false,
  type: 'button',
};

export default Button;
