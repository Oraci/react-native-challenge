import styled from 'styled-components/native';
import { setBoxShadow } from '../../utils/styled';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  max-width: 400px;
  max-height: 600px;
  padding: 32px 17px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  ${setBoxShadow(`0px 3px 6px #707070`, 5)};
`;

export const AnimationContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ContainerButton = styled.View`
  margin-top: 24px;
`;
