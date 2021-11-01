import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
      />
      <Home />

    </>

  );
}


