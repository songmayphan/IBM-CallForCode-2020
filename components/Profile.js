

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Header  from './Header';



const Profile = () =>{
    return(
        <View>
            <Header title="Profile"/>
            <Text>This page shows my profile</Text>
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
export default Profile;
