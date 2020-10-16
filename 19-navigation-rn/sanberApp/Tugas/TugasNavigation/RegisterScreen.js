import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Register extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
        <Text style={styles.formLabel}> Register </Text>
        <View>
          <TextInput
            secureTextEntry={true}
            placeholder="Username"
            style={styles.inputStyle}
          />
          <TextInput placeholder="Email" style={styles.inputStyle} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputStyle}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={{...styles.inputStyle, marginBottom: 30 }}
          />
          <TouchableHighlight
            style={{...styles.button, backgroundColor: "#013366"}}
            underlayColor='#fff'
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{...styles.button, backgroundColor: "#3fc5fc"}}
            underlayColor='#fff'
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  logo: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30
  },
  formLabel: {
    fontSize: 20
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    color:'#fff',
    textAlign:'center'
  }
});