import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const listScreen = () => {
    /*const friendArrayWithKeys = [
        { key: '1', name: 'Friend#1' },
        { key: '2', name: 'Friend#2' },
        { key: '3', name: 'Friend#3' },
        { key: '4', name: 'Friend#4' },
        { key: '5', name: 'Friend#5' }
    ];*/
    const friendArray = [
        { name: 'Friend#1', age: 29 },
        { name: 'Friend#2', age: 28 },
        { name: 'Friend#3', age: 27 },
        { name: 'Friend#4', age: 26 },
        { name: 'Friend#5', age: 39 }
    ];

    return (
        <View>
            <Text style={myListCSS.myListClass}> List Screen </Text>
            <FlatList
                horizontal={false}
                keyExtractor={objElement => objElement.name}
                data={friendArray}
                renderItem={({ item }) => 
                    // element === {item: { name: 'Friend#1 }, index: 0}
                    // item === { name: 'Friend#1'}
                     <Text style={myListCSS.listClass}> {item.name} - Age {item.age}</Text>}
            />
        </View>);
};

const myListCSS = StyleSheet.create({
    myListClass: {
        color: '#d3d3d7',
        backgroundColor: 'red'

    },
    listClass: {
        marginVertical: 30
    }
});

export default listScreen;
