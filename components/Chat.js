import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Constants from 'expo-constants';
import { FloatingAction } from "react-native-floating-action";






const Chat = () =>{
  ////////////////LOCALSTATE////////////////////
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [search, setSearch] = useState('');
const [queryResult, setQueryResult] = useState([]);
///////////////////////////////////////////


  //////////////////SEARCHBAR/////////////////////
  const SearchFilterFunction = text => {
    //passing the inserted text in textinput
    const newData = data.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.NAME ? item.NAME.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    })
      setQueryResult(newData)
      setSearch(text)
  }
  /////////////////////////////////////////////////////////

  ////////////////floating action button//////////////////
  const actions = [
    {
      text: "Start a new conversation",
      icon: require("../assets/chat-icon.png"),
      name: "bt_chat",
      position: 2
    },
    {
      text: "Video",
      icon: require("../assets/video-icon.png"),
      name: "bt_video",
      position: 3
    }
  ];

  //////////////////////////////////////////////////////

  
    return(
      <View style={styles.container}>
      <View>
       <SearchBar 
       round
       lightTheme
       searchIcon={{ size: 24 }}
       onChangeText={SearchFilterFunction}
       onClear={text => {SearchFilterFunction('')}}
       placeholder="Search for conversations"
       value={search}
       />
       {/* <View>
            <TouchableOpacity
         onPress={() => navigation.navigate("Compare")}
         style={styles.continueButton}
       >
         <Text style={{fontSize: 18}}>Continue</Text>
       </TouchableOpacity>
         </View> */}

     </View>
     {/* {isLoading ? (
       <ActivityIndicator />
     ) : (
       <FlatList
         data={queryResult}
         removeClippedSubviews={true}
         keyExtractor={({ _id }, index) => _id}
         renderItem={({ item }) => (
           <View style={styles.itemList}>
             <Text style={styles.nameText}>{item.NAME}</Text>
             <Text style={styles.manufacturerText}>{item.MANUFACTURER}</Text>
             <View style={styles.addButtonContainer}>
               <TouchableOpacity
                 onPress={() => 

                   add_to_list(item)
                 }
                 style={styles.button}
               >
                 <Text style={{fontSize: 18}}>Add item</Text>
               </TouchableOpacity>
             </View>
           </View>
         )}
       />
     )} */}
     <View style={{flex:3}}>


     <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
    position={"right"}
    color={"#e76f51"}

  />
     </View>
   </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#264653',
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  screen: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#E3E2DF"
    
  },
});

export default Chat;
