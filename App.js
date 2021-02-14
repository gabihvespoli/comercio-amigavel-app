import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';

function App() {
  return (
    <View>
      {/* <Login /> */}
      <Cadastro />
      <StatusBar style="auto" />
    </View>
  );
}
export default App;