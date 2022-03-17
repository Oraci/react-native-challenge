import React, { useContext, useMemo } from 'react';
import Modal from 'react-native-modal';
import TextLabel from '../../../components/TextLabel';
import Button from '../../../components/Button';
import ProductPrice from '../../../components/ProductPrice';
import { AppContext } from '../../../AppContext';
import { getProducts } from './utils';
import { ProductCartModalProps, ProductBag } from './types';
import {
  Container,
  ProductContainer,
  PriceContainer,
  ScrollContent,
  FooterContainer,
  TotalContainer,
  ButtonContainer,
  EmptyContainer,
} from './styles';

const ProductCartModal = ({ onBackButton }: ProductCartModalProps) => {
  const { state } = useContext(AppContext);
  const { cart } = state || {};

  const shoppingBag = useMemo(() => getProducts(cart), [cart]);

  return (
    <Modal
      isVisible={true}
      onBackdropPress={() => onBackButton()}
      onBackButtonPress={onBackButton}
      backdropOpacity={0.7}
      backdropColor="#707070"
      useNativeDriverForBackdrop>
      <Container>
        <TextLabel
          marginBottom="xl"
          fontSize={20}
          fontWeight="bold"
          textAlign="center">
          Shopping Bag
        </TextLabel>
        {shoppingBag.products.length ? (
          <ScrollContent showsVerticalScrollIndicator={false}>
            {shoppingBag.products.map((item: ProductBag) => {
              return (
                <ProductContainer key={`${item.id}${item.optionValues.size}`}>
                  <TextLabel fontSize={20} fontWeight="600">
                    {item.name}
                  </TextLabel>
                  <TextLabel color="#888" fontWeight="600" marginBottom="md">
                    {item.brand}
                  </TextLabel>
                  <TextLabel>{`Size: ${item.optionValues.size}`}</TextLabel>
                  <TextLabel marginBottom="md">{`Color: ${item.optionValues.color}`}</TextLabel>
                  <PriceContainer>
                    <ProductPrice
                      fontSize={16}
                      amount={item.price.amount}
                      currency={item.price.currency}
                      alignItems="flex-start"
                    />
                    <TextLabel fontSize={16}>
                      {`Quantity: ${item.bagQuantity}`}
                    </TextLabel>
                    <TextLabel
                      fontSize={16}
                      fontWeight="bold">{`Total item: ${item.total} ${item.price.currency}`}</TextLabel>
                  </PriceContainer>
                </ProductContainer>
              );
            })}
          </ScrollContent>
        ) : (
          <EmptyContainer>
            <TextLabel>Your shopping bag is empty</TextLabel>
          </EmptyContainer>
        )}
        <FooterContainer>
          {shoppingBag.products.length > 0 && (
            <TotalContainer>
              <TextLabel fontWeight="bold" fontSize={20}>
                {`Total: ${shoppingBag.total}`}
              </TextLabel>
            </TotalContainer>
          )}
          <ButtonContainer>
            <Button label="OK" onPress={onBackButton} />
          </ButtonContainer>
        </FooterContainer>
      </Container>
    </Modal>
  );
};

export default ProductCartModal;
