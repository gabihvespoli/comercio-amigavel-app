import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import CadVendedor from './src/pages/CadVendedor';
import CadCliente from './src/pages/CadCliente';
import CadConcluido from './src/pages/CadConcluido';
import Mei from './src/pages/Mei';

function App() {
  return (
    <View>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      {/* <CadVendedor /> */}
      {/* <CadCliente/> */}
      {/* <CadConcluido/> */}
      <Mei/>
      <StatusBar style="auto" />
    </View>
  );
}
export default App;