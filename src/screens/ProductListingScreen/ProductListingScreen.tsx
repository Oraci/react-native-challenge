import React, { useState, useLayoutEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, ListRenderItem } from 'react-native';
import { AppContext } from '../../AppContext';
import useQuery from '../../hooks/useQuery';
import { Product } from '../../types/product';
import CenterLoading from '../../components/CenterLoading';
import ShopBag from '../../components/ShopBag';
import ProductItem from '../../components/ProductItem';
import ProductCartModal from './ProductCartModal';
import { PRODUCTS_QUERY, ProductListQuery } from './services';
import { Container } from './styles';

function ProductListingScreen() {
  const [openProductCartModal, setOpenProductCartModal] = useState(false);

  const { data, loading, error } = useQuery<ProductListQuery>(PRODUCTS_QUERY);

  const navigation = useNavigation();
  const { state } = useContext(AppContext);
  const { cart } = state || {};

  console.log(cart);

  const productList = data?.products.content;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ShopBag
          quantity={cart.length}
          onPress={() => setOpenProductCartModal(true)}
        />
      ),
    });
  }, [navigation, cart]);

  if (loading) return <CenterLoading />;

  if (!productList || error) return <Text>I'm a friendly error :)</Text>;

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <ProductItem
        id={item.id}
        name={item.name}
        brand={item.brand}
        assets={item.assets}
        minimumPrice={item.minimumPrice}
      />
    );
  };

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        keyboardShouldPersistTaps="handled"
        style={{ borderRadius: 6, overflow: 'hidden' }}
      />
      {openProductCartModal && (
        <ProductCartModal onBackButton={() => setOpenProductCartModal(false)} />
      )}
    </Container>
  );
}

export default ProductListingScreen;
