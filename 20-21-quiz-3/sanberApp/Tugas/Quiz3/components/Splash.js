import React from "react";
import {
  View,
  Image,
  StyleSheet
} from "react-native";

export default function Splash({navigation}) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("Register");
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/Logo.png")}
        resizeMode="contain"
        style={{ width: 300 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
