import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ImageCarousel from '../../components/ImageCarousel';
import ProductPrice from '../../components/ProductPrice';
import TextLabel from '../../components/TextLabel';
import { ProductItemProps } from './types';
import {
  Container,
  InfoContainer,
  ImageContainer,
  DescContainer,
} from './styles';

const ProductItem = ({
  id,
  name,
  brand,
  assets,
  minimumPrice,
}: ProductItemProps) => {
  const navigation = useNavigation();

  const goToProductDetails = () =>
    navigation.navigate('ProductDetails', {
      productId: id,
      productName: name,
    });

  return (
    <Container onPress={goToProductDetails}>
      <InfoContainer>
        <DescContainer>
          <TextLabel
            fontWeight="bold"
            fontSize={26}
            marginBottom="sm"
            numberOfLines={1}
            ellipsizeMode="tail">
            {brand}
          </TextLabel>
          <TextLabel
            fontSize={20}
            fontWeight="600"
            numberOfLines={1}
            ellipsizeMode="tail">
            {name}
          </TextLabel>
        </DescContainer>
        <ProductPrice
          amount={minimumPrice.amount}
          currency={minimumPrice.currency}
          alignItems="flex-start"
          fontSize={32}
        />
      </InfoContainer>
      <ImageContainer>
        <ImageCarousel assets={assets} />
      </ImageContainer>
    </Container>
  );
};

export default ProductItem;
