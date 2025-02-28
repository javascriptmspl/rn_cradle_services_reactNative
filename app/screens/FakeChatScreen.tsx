import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text, Platform, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { RegularText } from '../components/MyText';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

const FakeChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation()
  
  const params = useRoute<any>().params;

  console.log({params});
  console.log({messages});

  const userName = params?.name;
  const profilePicture = params?.img

  useEffect(() => {
    setMessages([
      //@ts-ignore
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
   
    <View style={[styles.container,]}>
       <View
      style={{
        paddingTop: Platform.OS === "ios" ? 50 : 20,
        paddingHorizontal: 15,
      }}
    >
      <AntDesign
        onPress={() => navigation.goBack()}
        name="arrowleft"
        size={30}
        color={"black"}
      />
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 35,
              backgroundColor: "lightgrey",
              marginHorizontal: 10,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <Image
              source={{ uri: profilePicture }}
              style={{ resizeMode: "cover", width: "100%", height: "100%" }}
            />
          </View>
          <RegularText bold
            style={{
              // color: COLORS.white,
              fontSize: 16,
            }}
          >
            {userName}
          </RegularText>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <FontAwesome5 name="video" size={25} color={"black"} />
          <MaterialIcons
            // onPress={() => navigation.navigate("AudioCall")}
            name="call"
            size={25}
            color={"black"}
          />
        </View>
      </View>
    </View>
      <GiftedChat
        messages={messages}
        //@ts-ignore
        onSend={onSend}
        user={{
          _id: 1, 
        }}
      />
    </View>
   
  );
};

export default FakeChatScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 20,
    paddingRight: 10,marginTop:5
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    height: 46,
    width: 46,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
});