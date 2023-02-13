import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  View,
} from "react-native";
import React from "react";

import Cards from "./Cards";
const image = {
  uri: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};
const Projectsection = () => {
  return (
    <ScrollView style={{height:undefined}}>
      <ImageBackground source={image} resizeMode="cover">
        <Text
          style={{
            color: "white",
            fontSize: 40,
            textAlign: "center",
            fontWeight: "700",
            marginTop: 150,
            borderBottomWidth: 5,
            borderTopWidth: 5,
            borderBottomColor: "yellowgreen",
            borderTopColor: "yellowgreen",
            marginLeft: 80,
            width: "60%",
          }}
        >
          Projects
        </Text>
        <Text
          style={{
            color: "yellowgreen",
            fontSize: 12,
            textAlign: "center",
            padding: 6,
            marginTop: 10,
            fontWeight:'500'
          }}
        >
          | Computers are fast developers keep them slow : Anonymous |
        </Text>
      
          <Text
            style={{
              fontSize: 35,
              color: "yellowgreen",
              textAlign: "center",
              fontWeight: "700",
              marginTop: 40,
              borderBottomWidth: 5,
              borderBottomColor: "yellowgreen",
              borderTopColor: "yellowgreen",
              width: "50%",
              marginLeft: 100,
            }}
          >
            PROJECTS
          </Text>
        <View style={{marginBottom:20}}>
        <Cards />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export default Projectsection;
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 50,
    width: "95%",
    height: undefined,
    marginLeft:10,
    backgroundColor: 999,
    marginBottom: 20,
  },
});
