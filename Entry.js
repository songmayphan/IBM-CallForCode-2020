import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { StyleSheet, View} from 'react-native';

import SignInTabs from "./components/SignInTabs"
import MainTabs from "./components/MainTabs"
import {AuthenticationContext} from "./context/Authentication"

export default function Entry(){

  const {isUserAuthenticated} = useContext(AuthenticationContext)

  if(isUserAuthenticated === true){
    return (
      <View style={styles.container}>
        <MainTabs />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <SignInTabs />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f758e',
    justifyContent: 'center',
  },
});