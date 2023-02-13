import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Projectsection from "../Components/Projectsection";
import Footer from "../Components/Footer";
import {useNavigation} from '@react-navigation/native'

const Project = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Projectsection  />
      <Footer />
    </ScrollView>
  );
};
export default Project;

const styles = StyleSheet.create({});
