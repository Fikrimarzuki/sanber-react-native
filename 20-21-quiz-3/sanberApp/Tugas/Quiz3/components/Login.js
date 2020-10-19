import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login({ navigation }) {
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
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subTitle}>Sign in to continue</Text>
        </View>
        <View style={styles.content}>
          <View>
            <View>
              <Text>Email</Text>
              <TextInput placeholder="Email@mail.com" style={styles.inputStyle} />
            </View>
            <View
              style={{ borderBottomColor: '#E6EAEE', borderBottomWidth: 1, width: 318, marginBottom: 11 }}
            ></View>
            <View>
              <Text>Password</Text>
              <View style={styles.inputWrapperIcon}>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={{...styles.input }}
                  underlineColorAndroid="transparent"
                />
                <Icon style={styles.searchIcon} name="remove-red-eye" size={20} color="#000"/>
              </View>
            </View>
            <View
              style={{ borderBottomColor: '#E6EAEE', borderBottomWidth: 1, width: 318, marginBottom: 20 }}
            ></View>
            <View style={{ width: 318, marginBottom: 30 }}>
              <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
            </View>
            <TouchableHighlight
              style={{...styles.button, backgroundColor: "#F77866"}}
              underlayColor='#fff'
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableHighlight>
            <View style={{ width: 318, alignItems: "center", marginBottom: 30 }}>
              <Text>-OR-</Text>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require("../images/facebook.png")}
                style={styles.image}
                resizeMode="stretch"
              />
              <Image
                source={require("../images/google.png")}
                style={styles.image}
                resizeMode="stretch"
              />
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
  },
  inputWrapperIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 318
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424242',
  },
  imageWrapper: {
    flexDirection: "row",
    width: 318,
    justifyContent: "space-between"
  },
  image: {
    width: 140,
    height: 40,
    backgroundColor: "#fff"
  }
});