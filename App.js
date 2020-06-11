import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthenticationContextProvider from "./context/Authentication.js"
import Entry from "./Entry"

export default function App() {

      return (
        <AuthenticationContextProvider>
        <View style={styles.container}>
          <Text style={{justifyContent:'center'}}> This is app.js </Text>
          <Entry/>
        </View>
        </AuthenticationContextProvider>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
