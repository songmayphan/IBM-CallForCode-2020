import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Header  from './Header';
import Constants from 'expo-constants';



const FindClassmates = () =>{
    return(
        <View>
            <Header title= "My Classmates"/>
            <Text>This page shows the list of all my classmates </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#5f758e',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FindClassmates;
