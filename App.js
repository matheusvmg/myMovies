import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeContextProvider } from './src/contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content"/>
          <Routes />
        </NavigationContainer>
    </ThemeContextProvider>
  );
};

export default App;