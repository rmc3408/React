import React from "react";
import { Text, StyleSheet } from "react-native";

const CompScreen = () => {
  return <Text style={mystyle.mytext}> my Component Screen</Text>;
};

const mystyle = StyleSheet.create({
  mytext: {
    fontSize: 30,
  },
});

export default CompScreen;