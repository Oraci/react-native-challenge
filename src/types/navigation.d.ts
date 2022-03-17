declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  ProductListing: undefined;
  ProductDetails: { productId: string; productName: string };
};