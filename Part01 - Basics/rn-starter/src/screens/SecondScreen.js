import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const CompScreen = () => {
  const greeting = 'Good bye';
  const saudation = { name: 'Manu' };
  const info = <Text> {greeting}, {saudation.name} </Text>;
  const Fname = 'Raphael';
  
  return (<View>
    <Text style={myCSSstyle.myTitleClass}> Getting started with React</Text>
    <Text style={myCSSstyle.myTextClass}> My name is {Fname}</Text>
    <Text> {greeting} </Text>
    <Text> {saudation.name} </Text>
    {info}


  </View>);
};

const myCSSstyle = StyleSheet.create({
  myTitleClass: {
    fontSize: 45,
  },
  myTextClass: {
    fontSize: 20,
    color: 'red'
  }
});

export default CompScreen;
