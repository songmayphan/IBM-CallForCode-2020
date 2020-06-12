import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthenticationContextProvider from "./context/Authentication.js"
import Entry from "./Entry"
import MainTabs from './components/MainTabs.js';

export default function App() {

      return (
        // <AuthenticationContextProvider>
       
           <MainTabs/>
          /* <Entry/> */
      
        /* </AuthenticationContextProvider> */
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
