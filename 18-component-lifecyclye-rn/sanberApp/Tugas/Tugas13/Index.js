import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Register from "./RegisterScreen";
import Login from "./LoginScreen";
import About from "./AboutScreen";

export default class Tugas13 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Register /> */}
        {/* <Login /> */}
        <About />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingTop: 40,
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    margin: 0,
    alignItems: 'center',
    // justifyContent: 'center'
  }
});