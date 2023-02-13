import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import {useNavigation} from '@react-navigation/native'

const image = {
  uri: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};

const Herosec = () => {
  const navigation=useNavigation();
  return (
    <ScrollView style={styles.main}>
      <ImageBackground source={image} resizeMode="cover" style={styles.back}>
        <View style={{ width: "100%", marginTop: 100 }}>
          <Text
            style={{
              color: "white",
              fontSize: 35,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Hi I Am a
          </Text>
          <Text
            style={{
              color: "yellowgreen",
              fontSize: 45,
              textAlign: "center",
              fontWeight: "800",
              borderColor: "yellowgreen",
              borderWidth: 5,
              width: "70%",
              marginLeft: 60,
              marginTop: 20,
            }}
          >
            Developer
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('PROJECT')}  
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "800",
              }}
            >
              Project
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={()=> navigation.navigate('CONTACT')}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "800",
              }}
            >
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground source={image} resizeMode="cover" style={styles.back}>
        <View style={{ marginBottom: 30 }}>
          <Cards />
        </View>
        <Footer />
      </ImageBackground>
    </ScrollView>
  );
};
export default Herosec;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: undefined,
  },
  back: {
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    height: 60,
    width: "90%",
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    padding: 8,
    borderColor: "white",
    height: 50,
    width: "35%",
    backgroundColor: "yellowgreen",
    borderColor: "white",
    borderWidth: 3,
  },
  button2: {
    width: "35%",
    padding: 8,
    height: 50,
    width: "35%",
    backgroundColor: "white",
    borderColor: "yellowgreen",
    borderWidth: 3,
  },
});
