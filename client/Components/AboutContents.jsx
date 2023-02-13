import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Footer from "./Footer";
import {useNavigation} from '@react-navigation/native'
const image = {
  uri: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};
const image2 = {
  uri: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
};
const Herosec2 = () => {
  const navigation=useNavigation();
   return (
    <ScrollView>
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
          ABOUT Me
        </Text>
        <Text
          style={{
            color: "yellowgreen",
            fontSize: 15,
            textAlign: "center",
            padding: 6,
            fontWeight:"600",
            marginTop: 10,
          }}
        >
          || Computers are good at following instructions, but not at reading
          your mind ||
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: "yellowgreen",
            textAlign: "center",
            fontWeight: "700",
            marginTop: 40,
          }}
        >
          Who I Am
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          I am a MERN Developer .
        </Text>
        <TouchableOpacity
           onPress={()=> navigation.navigate('CONTACT')}
          style={styles.button2}
        >
          <Text
            style={{
              
              color: "white",
              fontSize: 25,
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Contact
          </Text>
        </TouchableOpacity>
        <Image style={styles.conimage} source={image2} />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
};
export default Herosec2;
const styles = StyleSheet.create({
  button2: {
    padding: 5,
    height: 55,
    width: 170,
    alignSelf: "center",
    backgroundColor: "yellowgreen",
    borderColor: "black",
    marginTop: 15,
    backgroundColor: "yellowgreen",
    borderColor: "white",
    height: 50,
    width: "40%",
    borderColor: "white",
    borderWidth: 3,
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  conimage: {
    height: 400,
    width: 430,
    marginTop: 100,
    marginLeft: 10,
    borderColor: "white",
  },
});
