import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import ProductListingScreen from './screens/ProductListingScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import { RootStackParamList } from './types/navigation';
import theme from './styles/theme-styled';
import AlertProvider from './hooks/useAlert';
import { AppProvider } from './AppContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AlertProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="ProductListing"
                component={ProductListingScreen}
                options={{ title: 'Products' }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={({ route }) => ({ title: route.params.productName })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AlertProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
