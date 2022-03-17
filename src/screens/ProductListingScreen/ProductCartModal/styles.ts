import styled from 'styled-components/native';
import { getPadding, setBoxShadow } from '../../../utils/styled';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  padding: 32px 17px;
  border-radius: 5px;
  ${setBoxShadow(`0px 3px 6px #707070`, 5)};
`;

export const ProductContainer = styled.View`
  margin-bottom: 16px;
  border: 1px #ebebeb;
  border-radius: 5px;
  padding: ${getPadding('sm')};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
`;

export const FooterContainer = styled.View`
  padding: ${getPadding('sm')};
  justify-content: center;
  height: 100px;
`;

export const TotalContainer = styled.View`
  align-items: flex-end;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
