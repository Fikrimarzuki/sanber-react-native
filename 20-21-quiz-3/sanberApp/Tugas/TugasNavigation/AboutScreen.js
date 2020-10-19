import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Tentang Saya</Text>
        <Image source={require('./images/avatar.jpg')} style={styles.avatar} />
        <View style={styles.profile}>
          <Text style={{ fontSize: 20, color: "#013366", fontWeight: "bold" }}>John Doe</Text>
          <Text style={{ fontSize: 15, color: "#3fc5fc", fontWeight: "bold" }}>React Native Developer</Text>
        </View>
        <View style={styles.portofolio}>
          <View>
            <Text>Portofolio</Text>
            <View
              style={{ borderBottomColor: 'black', borderBottomWidth: 1}}
            ></View>
          </View>
          <View style={styles.portofolioContent}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('./images/gitlab.png')} style={styles.icon} />
              <Text>@johndoe</Text>        
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('./images/github.png')} style={styles.icon} />
              <Text>@johndoe</Text>        
            </View>
          </View>
        </View>
        <View style={styles.contact}>
          <View>
            <Text>Hubungi Saya</Text>
            <View
              style={{ borderBottomColor: 'black', borderBottomWidth: 1}}
            ></View>
          </View>
          <View style={styles.contactContent}>
            <View style={styles.socialMedia}>
              <Image source={require('./images/facebook.png')} style={styles.icon} />
              <Text style={{ marginLeft: 10 }}>@johndoe</Text>
            </View>
            <View style={styles.socialMedia}>
              <Image source={require('./images/instagram.jpg')} style={styles.icon} />
              <Text style={{ marginLeft: 10 }}>@johndoe</Text>
            </View>
            <View style={styles.socialMedia}>
              <Image source={require('./images/twitter.png')} style={styles.icon} />
              <Text style={{ marginLeft: 10 }}>@johndoe</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "stretch"
  },
  title: {
    fontSize: 40
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150/2
  },
  profile: {
    flex: 1,
    alignItems: "center"
  },
  icon: {
    width: 50,
    height: 50
  },
  portofolio: {
    backgroundColor: "#efefef",
    alignSelf: "stretch",
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10
  },
  portofolioContent: {
    flexDirection: "row",
    margin: 10
  },
  contact: {
    backgroundColor: "#efefef",
    alignSelf: "stretch",
    borderRadius: 10,
    padding: 10
  },
  contactContent: {
    alignItems: "center",
    margin: 10
  },
  socialMedia: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: 10
  }
});