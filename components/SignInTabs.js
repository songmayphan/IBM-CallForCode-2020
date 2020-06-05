import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import SignUp from './SignUp'
import SignIn from './SignIn'

const SignInTab = createBottomTabNavigator();

function SignInTabs() {

    return (
        <NavigationContainer independent={true}>
            <SignInTab.Navigator >
                <SignInTab.Screen
                    options = {{tabBarLabel: 'Sign In', lableStyle: {color: '#FFFF'},tabBarStyle: {fontSize: 30}}}
                    name="Sign In"
                    component={SignIn}
                />
                {/* <SignInTab.Screen
                    
                    name="Sign Up"
                    component={SignUp}
                /> */}
            </SignInTab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5f758e',
        justifyContent: 'center',
    },
});
export default SignInTabs