import React from 'react';
import { StyleSheet, View } from 'react-native';
import Youtube from "./Tugas/Tugas12/App";
import Tugas13 from "./Tugas/Tugas13/Index";
import Tugas14 from "./Tugas/Tugas14/App";
import Tugas15 from "./Tugas/TugasNavigation/index";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Youtube /> */}
      {/* <Tugas13 /> */}
      {/* <Tugas14 /> */}
      <Tugas15 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
