import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome";
import Footer from './Footer';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const image = {
  uri: 'https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
};
const ContactSec = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSuject] = useState('');
  const [massege, setMassege] = useState('');

  const handleSubmit = async () => {
    try {
      if ((name == '', email == '', subject == '', massege == '')) {
        alert('All fields are required');
        return;
      }
      const obj = {
        name: name,
        email: email,
        subject: subject,
        message: massege,
      };
      const resp = await axios.post('http://192.168.1.156:3200/submit', obj);
      if (resp.status === 200) {
        alert('Sign In Successful');
        console.log(resp.data);
        navigation.navigate('HOME');
      } else {
        console.log('user cancelled');
      }
    } catch (err) {
      throw err;
    }
  };

  // http://localhost:3200/submit
  return (
    <ScrollView style={{height: undefined}}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{height: undefined}}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            textAlign: 'center',
            fontWeight: '700',
            marginTop: 150,
            borderBottomWidth: 5,
            borderTopWidth: 5,
            borderBottomColor: 'yellowgreen',
            borderTopColor: 'yellowgreen',
            marginLeft: 65,
            width: '70%',
          }}>
          Contact Me
        </Text>
        <Text
          style={{
            color: 'yellowgreen',
            fontSize: 17,
            textAlign: 'center',
            padding: 6,
            marginTop: 10,
          }}>
          || If You have any Query Contact Me ||
        </Text>
        {/* //------------------------------------------------------------------// */}
        <View style={styles.cardContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => setName(text)}
            placeholder="Enter Your Name"
            placeholderTextColor="#8b9cb5"
          />

          <TextInput
            style={styles.inputStyle}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Your Email"
            placeholderTextColor="#8b9cb5"
          />

          <TextInput
            style={styles.inputStyle}
            onChangeText={text => setSuject(text)}
            placeholder="Subject"
            placeholderTextColor="#8b9cb5"
          />
          <TextInput
            style={styles.inputStylelast}
            multiline={true}
            numberOfLines={10}
            onChangeText={text => setMassege(text)}
            placeholder="Enter Your Massege"
            placeholderTextColor="#8b9cb5"
          />

          <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                textAlign: 'center',
                fontWeight: '500',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        {/* //---------------------------------------------------------------------// */}
        <Footer />
      </ImageBackground>
    </ScrollView>
  );
};
export default ContactSec;
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 30,
    width: '100%',
    height: 520,
    backgroundColor: '#000',
  },
  inputStyle: {
    width: '80%',
    color: '#8b9cb5',
    height: 40,
    borderColor: '#8b9cb5',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 40,
    paddingLeft: 10,
  },
  inputStylelast: {
    width: '80%',
    height: 150,
    color: '#8b9cb5',
    borderColor: '#8b9cb5',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 40,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
  buttonStyle: {
    padding: 5,
    marginLeft: 115,
    marginTop: 20,
    backgroundColor: 'yellowgreen',
    borderColor: 'white',
    height: 50,
    width: '40%',
    borderColor: 'white',
    borderWidth: 3,
  },
});
