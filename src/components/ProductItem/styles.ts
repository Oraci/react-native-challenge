import styled from 'styled-components/native';
import { getPadding, getMargin } from '../../utils/styled';

export const Container = styled.TouchableOpacity`
  height: 150px;
  margin-bottom: ${getMargin('md')};

  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  background: #ffffff;
  border: 1px #ebebeb;
`;

export const DescContainer = styled.View`
  flex: 1;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  flex: 1;
  padding: ${getPadding('md')};
`;

export const ImageContainer = styled.View`
  padding: ${getPadding('sm')};
  width: 150px;
`;
