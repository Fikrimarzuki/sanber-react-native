import React from 'react';
import { StyleSheet, View } from 'react-native';
import Youtube from "./Tugas/Tugas12/App";
import Tugas13 from "./Tugas/Tugas13/Index";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Youtube /> */}
      <Tugas13 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
