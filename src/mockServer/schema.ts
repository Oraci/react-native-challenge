const graphqlSchema = `
  schema {
    query: Query
  }

  type Query {
    products: ProductsQuery!
    product(id: ID!): Product
  }

  type ProductsQuery {
    content: [Product]!
    totalElements: Int!
  }

  type Price { amount: Int currency: String }

  type OptionValues {
    size: String
    color: String
  }

  type Variants {
    id: ID!
    quantity: Int!
    optionValues: OptionValues!
    price: Price!
  }

  type Assets {
    url: String!
    primary: Boolean!
  }

  type Product {
    id: ID!
    name: String!
    brand: String!
    uri: String
    variants: [Variants!]!
    assets: [Assets]
    minimumPrice: Price!
  }
`;

export default graphqlSchema;