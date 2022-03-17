import Products  from './product.json';

const resolverMap = {
  Query: {
    products() {
      return {
        content: Products,
        totalElements: Products.length
      }
    },
    product(_: unknown, { id }: { id: string }) {
      return Products.find((p) => p.id === id)
    }
  },
};

export default resolverMap;
