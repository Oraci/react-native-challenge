import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import TextLabel from '../../components/TextLabel';
import Button from '../../components/Button';
import CenterLoading from '../../components/CenterLoading';
import ImageCarousel from '../../components/ImageCarousel';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import VariantPicker from '../../components/VariantPicker';
import useQuery from '../../hooks/useQuery';
import { SET_CART, AppContext } from '../../AppContext';
import { useAlert } from '../../hooks/useAlert';
import { ProductVariant } from '../../types/product';
import { PRODUCT_QUERY, ProductDetailsQuery } from './services';
import { ProductDetailsScreenProps } from './types';
import { Container, ButtonContainer } from './styles';

function ProductDetailsScreen({ route }: ProductDetailsScreenProps) {
  const [variant, setVariant] = useState<ProductVariant>();

  const navigation = useNavigation();
  const { productId } = route.params;
  const { dispatch } = useContext(AppContext);

  const { data, loading, error } = useQuery<ProductDetailsQuery>(
    PRODUCT_QUERY,
    {
      variables: {
        id: productId,
      },
      skip: !productId,
    },
  );

  const { openAlert } = useAlert();
  const { product } = data || {};

  if (loading) return <CenterLoading />;

  if (!product || error) return <TextLabel>I'm a friendly error :)</TextLabel>;

  const addVariantToCart = () => {
    if (variant?.id) {
      dispatch({
        type: SET_CART,
        payload: { ...variant, name: product.name, brand: product.brand },
      });

      openAlert({
        message: 'Product added!',
        action: () => navigation.navigate('ProductListing'),
      });
    }
  };

  const onChangeSelect = (selectedVariant?: ProductVariant) => {
    setVariant(selectedVariant);
  };

  return (
    <Container
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}>
      <ImageCarousel assets={product.assets} />
      <ProductDetailsCard
        name={product.name}
        brand={product.brand}
        price={variant?.price || product.minimumPrice}
      />
      <VariantPicker
        variants={product.variants}
        onChangeSelect={onChangeSelect}
      />
      <ButtonContainer>
        <Button
          label="Add to Cart"
          disabled={!variant}
          onPress={addVariantToCart}
        />
      </ButtonContainer>
    </Container>
  );
}

export default ProductDetailsScreen;
