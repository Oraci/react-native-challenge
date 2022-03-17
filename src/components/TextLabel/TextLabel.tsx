import styled, { css } from 'styled-components/native';
import { getFontSize } from '../../utils/styled';
import { TextLabelProps } from './types';

const TextLabel = styled.Text<TextLabelProps>`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.typography.fontSize[fontSize] : getFontSize(14)};

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ theme, marginRight }) =>
    marginRight &&
    css`
      margin-right: ${theme.space.margin[marginRight]};
    `};

  ${({ theme, marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${theme.space.margin[marginBottom]};
    `};
`;

export default TextLabel;
