import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const Footer = () => {
  return (
    <View style={styles.footer}>
      <View>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 40,
            marginLeft: 30,
            color: "yellowgreen",
            borderBottomWidth :5,
            borderBottomColor: 'yellowgreen',
            borderTopColor:'yellowgreen',
          width:'55%'
          }}
        >
          ADDRESS
        </Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between' ,marginLeft:25,marginTop:10}}>
          <Text style={{ color: "white", fontSize: 18 ,}}>
            <Icon name="home" size={30} color="yellowgreen" /> {`    Sector : 71 , SAS Nagar (Mohali)`}
          </Text>
          <Text style={{ color: "white", fontSize: 18,marginTop:5 }}>
            <Icon name="home" size={30} color="yellowgreen" />
           { `    +91 8410657252`}
          </Text>
          <Text style={{ color: "white", fontSize: 18 ,marginTop:8 }}>
          <Icon name="envelope" size={25} color="yellowgreen" />
            {'     18lavkushyadav@gmail.com'}
          </Text>
        </View>
     
      <View>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 40,
            marginLeft: 28,
            color: "yellowgreen",
            marginTop: 10,
            borderBottomWidth :5,
            borderBottomColor: 'yellowgreen',
            borderTopColor:'yellowgreen',
          width:'60%'
          }}
        >
          ABOUT ME
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "left",
            padding: 10,
            marginLeft: 20,
            lineHeight: 25,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dicta
          veniam culpa recusandae voluptas natus sapiente aut quaerat delectus
          nobis!
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#222",
  },
});
