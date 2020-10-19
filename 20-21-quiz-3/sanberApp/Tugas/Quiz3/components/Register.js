import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";
import { useFonts } from "expo-font";

export default function Register({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Montserrat": require("../../../assets/fonts/Montserrat-Black.ttf")
  });
  if (!fontsLoaded) {
    return <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subTitle}>Sign up to continue</Text>
        </View>
        <View style={styles.content}>
          <View>
            <View>
              <Text>Name</Text>
              <TextInput
                placeholder="Name"
                style={styles.inputStyle}
              />
            </View>
            <View
              style={{ borderBottomColor: '#E6EAEE', borderBottomWidth: 1, width: 318, marginBottom: 11 }}
            ></View>
            <View>
              <Text>Email</Text>
              <TextInput placeholder="Email@mail.com" style={styles.inputStyle} />
            </View>
            <View
              style={{ borderBottomColor: '#E6EAEE', borderBottomWidth: 1, width: 318, marginBottom: 11 }}
            ></View>
            <View>
              <Text>Phone Number</Text>  
              <TextInput
                placeholder="+62000000000"
                style={styles.inputStyle}
              />
            </View>
            <View
              style={{ borderBottomColor: '#E6EAEE', borderBottomWidth: 1, width: 318, marginBottom: 11 }}
            ></View>
            <View>
              <Text>Password</Text>
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={{...styles.inputStyle }}
              />
            </View>
            <View
              style={{ borderBottomColor: '#E6EAEE', borderBottomWidth: 1, width: 318, marginBottom: 30 }}
            ></View>
            <TouchableHighlight
              style={{...styles.button, backgroundColor: "#F77866"}}
              underlayColor='#fff'
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
              <Text>Already have an account? </Text>
              <Text
                style={{ color: "#F77866"}}
                onPress={() => navigation.navigate("Login")}
              >
                Sign In
              </Text>
            </View>
          </View>
        </View>
      </View>
      )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    alignSelf: "stretch",
    marginLeft: 27,    
    marginBottom: 27
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#0C0423",
    fontSize: 30,
  },
  subTitle: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "normal",
    color: "#4D4D4D"
  },
  content: {
    width: 366,
    height: 420,
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingLeft: 16,
    paddingTop: 45
  },
  button: {
    width: 318,
    height: 50,
    borderRadius: 6,
    paddingTop: 16,
    paddingBottom: 17,
    marginBottom: 11
  },
  buttonText: {
    color:'#fff',
    textAlign:'center'
  }
});