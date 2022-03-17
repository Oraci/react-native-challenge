# Tamanna's React Native Challenge

This document describes the challenges that are being evaluated during the challenge. On the codebase, you will find some useful TODO comments as well.

### Tech Stack

- React Native
- TypeScript
- GraphQL

### Pre-requirements

The only requirement for this challenge is to follow the [React Native CLI development setup](https://reactnative.dev/docs/environment-setup) , in case you haven't done it before.

### Run the project

Run in your terminal, on the project's root:

> npm install

And then

> npm run ios OR npm run android

### Challenge delivery

The challenge that you have received is based on a fork, to deliver your solution you should create a Merge Request from your feature branch to the forks's master. Proper git usage will be taken into consideration when evaluating.

## Problem context

For this challenge, we are putting in your hands an ongoing app, and your goal is to complete some tasks around it.
The app is an ecommerce, and has two screens:

- **Product Listing Screen**, where the products are listed and displayed with just the main information.
- **Product Details Screen**, where the details of a certain product are displayed. And the customer can add the product to the cart.

It's possible to reach the Product Details by pressing the product on the listing.


## Challenges

### 1. List products

The goal of this challenge is to list all the products received by the GraphQL API and render them. Currently, the app is only rendering the IDs of each

#### 1.1 Fix the bug
Before rendering the products, you must fix a bug that was discovered:

> The list is displaying only 3 product IDs, but the API returns 4. Besides that, by pressing an item on the list it navigates to the wrong product.

#### 1.2 Render the products

List and render the products in a user-friendly way, do a refactor in `ProductListingScreen.tsx` to improve readability and performance.
The UI of each product should look like this: (don't need to be pixel perfect)

<img src="https://i.imgur.com/yoMLLg9.png" width="500">

The GraphQL response schema can be found in the `schema.ts` file, it will be helpful to adjust the query. The following image also represents that schema:

<img src="https://i.imgur.com/7Bhoqp6.png" width="1400">

### 2. Manage variant availability on Product details

The goal of this challenge is to add the logic to manage the variant availability, *i.e.* give feedback to the user when he tries to buy an out-of-stock variant. A variant is a combination of properties within a product (in our case, a combination between color and size).


#### 2.1 Implement logic

The logic is the following:

- List all the **unique** Sizes and Colors that the product has on the two Pickers. 
- Display the price of the current variant in the product (if none selected, show the product `minimumPrice`).
- In case the selected variant has `quantity=0`, disabled the "Add to Cart" button. Otherwise, inject the current variant ID in the "Add to Cart" callback.

<img src="https://i.imgur.com/k3Iz2Lp.png" width="200">


#### 2.2 Test the logic

The availability check logic should be isolated and tested using some automation. For this, you can use `react-test-renderer` or any other testing tool that you prefer.
