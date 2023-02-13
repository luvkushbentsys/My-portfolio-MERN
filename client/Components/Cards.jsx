import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React from "react";


const ProjectCardData = [
  {
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    title: "ShopLane Website",
    text: " hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, unde. Ipsa perferendis aliquam earum iste inventore a laborum sequi illo?",
    view: "https://github.com/Lavkush160799/onlinestore",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Garhwal Gym",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, unde. Ipsa perferendis aliquam earum iste inventore a laborum sequi illo?",
    view: "https://github.com/Lavkush160799/Garhwalgym",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545216560-68430ad77342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    title: "Food Recipe",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, unde. Ipsa perferendis aliquam earum iste inventore a laborum sequi illo?",
    view: "https://github.com/Lavkush160799/adminpanel",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Nukk webpage",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, unde. Ipsa perferendis aliquam earum iste inventore a laborum sequi illo?",
    view: "https://github.com/Lavkush160799/adminpanel",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80",
    title: "Ipl App",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, unde. Ipsa perferendis aliquam earum iste inventore a laborum sequi illo?",
    view: "https://github.com/Lavkush160799/Iplapp",
  },
  {
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Food Menu Bar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, unde. Ipsa perferendis aliquam earum iste inventore a laborum sequi illo?",
    view: "https://github.com/Lavkush160799/Iplapp",
  },
];

const Cards = () => {
 
  return (
    <View style={styles.main}>
      {ProjectCardData.map((data, key) => {
        return (
          <View style={styles.cards} key={key}>
            <Image
              style={styles.images}
              source={{
                uri:data.image,
              }}
            />
            <Text
              style={{
                fontSize: 30,
                color: "yellowgreen",
                textAlign: "left",
                fontWeight: "700",
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                textAlign: "left",
                marginLeft: 20,
                lineHeight: 20,
                marginRight: 5,
                marginTop: 10,
                // fontFamily:'san-sarif'
              }}
            >
              {data.text}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(data.view)}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "800",
                  }}
                 
                >
           View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "800",
                  }}
                >
                  Source
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cards: {
    width: "80%",
    height: 490,
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 5,
  },

  images: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    height: 70,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginLeft: 30,
    backgroundColor: "yellowgreen",
    height: "70%",
    width: "30%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  button2: {
    marginRight: 30,
    backgroundColor: "yellowgreen",
    height: "70%",
    width: "30%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
});
