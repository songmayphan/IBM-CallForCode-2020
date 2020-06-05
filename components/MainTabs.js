import React from "react";

//Navivgation
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//redux
// import { Provider } from "react-redux";
// import store from "../redux/store";
//components
import ClassList from "./ClassList";
import Profile from "./Profile";
import Chat from "./Chat";
// import Scan from "./Scan";
//Amplify

//import { withAuthenticator } from 'aws-amplify-react-native';

//-------------------------------------------------------------

//ClassScreen
const ClassScreen = (props) => {
  return (
    <View style={styles.container}>
      <ClassList />
    </View>
  );
};
//ProfileScreen------------------------------------------------------
const ProfileScreen = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: '#8baab5'}]}>
      <Profile />
    </View>
  );
};

//ChatScreen------------------------------------------------------

const ChatScreen = (props) => {
  return (
    <View style={styles.container}>
      <Chat />
    </View>
  );
};

//styling-------------------------------------------------------
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    height: 60,
    marginBottom: 0,
  },
  text: {
    height: 60,
    padding: 8,
    margin: 5,
    textAlign: "center",
    fontSize: 20,
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "red",
  },
  shop: {
    height: 60,
    padding: 15,
    margin: 3,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#5f758e",
    padding: 9,
    margin: 3,
  },
  btnText: {
    color: "#ffff",
    fontSize: 20,
    textAlign: "center",
  },
});

//App-----------------------------------------------------------

const Tab = createBottomTabNavigator();

class MainTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "My Classes") {
                  iconName = focused ? "ios-basket" : "ios-basket";
                } else if (route.name === "Chat") {
                  iconName = focused ? "ios-list" : "ios-list-box";
                } else if (route.name === "Profile") {
                  iconName = focused ? "md-person" : "md-person";
                } 

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            //Icon change when clicking the button
            tabBarOptions={{
              activeTintColor: "#BDC667",

              inactiveTintColor: "#5f758e",
            }}
          >
            
            <Tab.Screen name="My Classes" component={ChatScreen} />
            <Tab.Screen name="Chat" component={ClassScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default MainTabs;
