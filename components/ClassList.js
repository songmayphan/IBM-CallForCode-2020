import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Header  from './Header';



const ClassList = () =>{
    return(
        <View>
            <Header title="My Classes"/>
            <Text>This page shows the list of all classes I enrolled </Text>
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
