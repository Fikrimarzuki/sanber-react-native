import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import skillData from "./skillData.json";

export default class SkillScreen extends React.Component {
  render() {
    let skills = skillData;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.profile}>
          <Image source={require('../images/avatar.jpg')} style={styles.avatar}/>
          <View style={styles.profileText}>
            <Text>Hai</Text>
            <Text>John Doe</Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>SKILL</Text>
          <View
            style={{ borderBottomColor: '#B4E9FF', borderBottomWidth: 2}}
          ></View>
        </View>
        <View style={styles.category}>
          <View style={styles.categoryContent}>
            <Text style={styles.categoryText}>Library/Framework</Text>
          </View>
          <View style={styles.categoryContent}>
            <Text style={styles.categoryText}>Bahasa Pemrograman</Text>
          </View>
          <View style={styles.categoryContent}>
            <Text style={styles.categoryText}>Teknologi</Text>
          </View>
        </View>
        <View style={styles.contentSkill}>
          <FlatList
            style={styles.wrapper}
            data={skills.items}
            renderItem={(skill)=><View style={styles.contentWrapper}>
                <MaterialCommunityIcons name={skill.item.iconName} size={80} color="#003366"/>
                <View>
                  <Text style={styles.skillName}>{skill.item.skillName}</Text>
                  <Text style={styles.skillCategory}>{skill.item.categoryName}</Text>
                  <Text style={styles.skillPercentage}>{skill.item.percentageProgress}</Text>
                </View>
                <Icon name="right" size={60} color="#013366" />
              </View>
            }
            keyExtractor={(item)=>item.id}
            // ItemSeparatorComponent={()=><View style={styles.wrapper}/>}
          />
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
    alignSelf: "flex-end",
    marginTop: -20,
    marginBottom: -50
  },
  logo: {
    resizeMode: 'contain',
    width: 150,
    height: 150
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30/2
  },
  profile: {
    flexDirection: "row",
    alignSelf: "flex-start",
    padding: 10
  },
  profileText: {
    paddingLeft: 10,
    fontSize: 10
  },
  title: {
    alignSelf: "stretch",
    padding: 10
  },
  titleText: {
    color: "#013366",
    fontSize: 25
  },
  category: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryContent: {
    backgroundColor: "#B4E9FF",
    margin: 10,
    padding: 8,
    borderRadius: 5,
    minWidth: 110
  },
  categoryText: {
    color: "#013366",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center"
  },
  contentSkill: {
    alignSelf: "stretch",
    flex: 1
  },
  contentWrapper: {
    backgroundColor: "#B4E9FF",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    minHeight: 100,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15
  },
  skillName: {
    fontSize: 24,
    color: "#013366",
    fontWeight: "bold"
  },
  skillCategory: {
    fontSize: 16,
    color: "#3EC6FF"
  },
  skillPercentage: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "right"
  }
});