import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import flashSellProduct from "./flashSell.json";
import newProduct from "./newProduct.json";

const flashSellImage = [
  require("../images/handwash.png"),
  require("../images/speaker.png"),
  require("../images/google-home.png")
];

const newProductImage = [
  require("../images/shoes.png"),
  require("../images/chair.png")
];
export default function Home() {
  let [fontsLoaded] = useFonts({
    "Montserrat": require("../../../assets/fonts/Montserrat-Black.ttf")
  });
  if (!fontsLoaded) {
    return <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.inputWrapperIcon}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
            <TextInput
              placeholder="Search Product"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <Icon style={styles.searchIcon} name="camera-alt" size={20} color="#000"/>
          </View>
          <Icon style={styles.searchIcon} name="notifications-none" size={20} color="#000"/>
        </View>
        <View style={styles.slider}>
          <Image
            source={require("../images/Slider.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.categories}>
          <Image
            source={require("../images/Man.png")}
            resizeMode="contain"
          />
          <Image
            source={require("../images/Woman.png")}
            resizeMode="contain"
          />
          <Image
            source={require("../images/Kids.png")}
            resizeMode="contain"
          />
          <Image
            source={require("../images/Home.png")}
            resizeMode="contain"
          />
          <Image
            source={require("../images/More.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.flashSellWrapper}>
          <View style={{ alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 24, marginRight: 10 }}>Flash Sell</Text>
              <Text style={{ color: "#F89C52", fontSize: 12 }}>03.30.30</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>All</Text>
              <Icon name="chevron-right" size={10} color="#F89C52"/>
            </View>
          </View>
          <View style={{ alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            {
              flashSellProduct.products.map((el, index) => {
                return (
                  <View key={el.id} style={styles.flashSell}>
                    <Image
                      source={flashSellImage[index]}
                      resizeMode="stretch"
                      style={styles.imageFlash}
                    />
                    <View>
                      <Text>{el.name}</Text>
                      <Text>{el.price}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.newProductWrapper}>
          <View style={{ alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 24, marginRight: 10 }}>New Product</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>All</Text>
              <Icon name="chevron-right" size={10} color="#F89C52"/>
            </View>
          </View>
          <View style={{ alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            {
              newProduct.products.map((el, index) => {
                return (
                  <View key={el.id} style={styles.newProduct}>
                    <Image
                      source={newProductImage[index]}
                      resizeMode="stretch"
                      style={styles.imageNew}
                    />
                    <View>
                      <Text>{el.name}</Text>
                      <Text>{el.price}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  inputWrapperIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#727C8E",
    backgroundColor: '#fff'
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    width: 260,
    height: 40,
    paddingHorizontal: 10,
  },
  slider: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: 10,
  },
  flashSell: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  flashSellWrapper: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    fontFamily: "Montserrat"
  },
  newProductWrapper: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    fontFamily: "Montserrat"
  },
  newProduct: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageFlash: {
    width: 60,
    height: 60,
    backgroundColor: "#fff"
  },
  imageNew: {
    width: 180,
    height: 180,
    backgroundColor: "#fff"
  }
});