import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Home from './src/pages/Home';

function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
export default App;