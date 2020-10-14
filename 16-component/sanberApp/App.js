import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Youtube from "./Tugas/Tugas12/App";

export default function App() {
  return (
    <View style={styles.container}>
      <Youtube />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
