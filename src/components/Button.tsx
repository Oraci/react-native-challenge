import React from 'react';
import styled from 'styled-components/native';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

const StyledTouchable = styled.TouchableOpacity`
  background-color: ${({ disabled }) => disabled ? '#ddd' : '#3eabee' };
  max-width: 200px;
  padding: 10px 16px;
  align-items: center;
  border-radius: 10px;
`;

const Text = styled.Text<Pick<Props, 'disabled'>>`
  font-size: 24px;
  font-weight: 500;
  color: ${({ disabled }) => disabled ? '#888' : '#222' } ;
`;

const Button = ({ label, onPress, disabled = false }: Props) => (
  <StyledTouchable onPress={onPress} disabled={disabled} >
    <Text disabled={disabled}>{label}</Text>
  </StyledTouchable>
);

export default Button;
