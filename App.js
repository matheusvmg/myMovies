import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { themes } from './src/styles/theme/themes';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content"/>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;