import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import TextMsg from "./components/TextMsg";
import { chatUserList, messagesList } from "../../utils/dummy";
import { COLORS } from "../../styles";
import { RegularText } from "../../components/MyText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatStackParams, ProfileStackParams } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { useHideBottomBar } from "../../hooks/useHideBottomBar";

const ChatHeader = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
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
              source={{ uri: chatUserList[1].image }}
              style={{ resizeMode: "cover", width: "100%", height: "100%" }}
            />
          </View>
          <RegularText bold
            style={{
              // color: COLORS.white,
              fontSize: 16,
            }}
          >
            Kristin Jones
          </RegularText>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          {/* <FontAwesome5 name="video" size={25} color={"black"} /> */}
          <MaterialIcons
            onPress={() => navigation.navigate("AudioCall")}
            name="call"
            size={25}
            color={"black"}
          />
        </View>
      </View>
    </View>
  );
};

const ChatForm = ({}) => {
  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "space-evenly",
          paddingHorizontal: 15,
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 1,
          overflow: "hidden",
        }}
      >
        {/* input start */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            alignItems: "center",
            borderRadius: 40,
            height: 40,
            flex: 1,
          }}
        >
          <TextInput
            style={{
              marginHorizontal: 5,
              paddingRight: 12,
              color: COLORS.grey,
              height: 40,
            }}
            onFocus={() => {
              console.log("focus received");
            }}
            placeholderTextColor="#999"
            onBlur={() => console.log("focus lost")}
            placeholder="Type a message"
          />
        </View>
        {/* input end */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: 55,
            height: 55,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 28,
          }}
        >
          <FontAwesome
            name="send"
            size={22}
            color={COLORS.white}
            style={{ marginRight: 2.5 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const ChatMessage = ({ item }: any) => {
  const isSideLeft = item.senderId === 0;
  // if (item?.type === 'image') {
  //   return <ImageMsg isSideLeft={isSideLeft} item={item} />;
  // }
  return <TextMsg isSideLeft={isSideLeft} item={item} />;
};

const ChatBox = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={messagesList}
        numColumns={1}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", color: "#555" }}>
            Send message to start conversation
          </Text>
        )}
        renderItem={({ item, index }) => (
          <ChatMessage index={index} item={item} />
        )}
      />

      {false ? (
        <View
          style={{
            padding: 5,
            position: "absolute",
            bottom: 0,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "#444",
              width: 70,
              borderRadius: 20,
              padding: 5,
              fontSize: 12,
              color: "#FFF",
            }}
          >
            typing...
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const MessageScreen = () => {
  useHideBottomBar();

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [isLike, setIsLike] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* {HEADER} */}
      <ChatHeader />
      {/* {HEADER CLOSED} */}
      {/* {CHAT VIEW} */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          paddingBottom: 15,
          paddingHorizontal: 15,
        }}
      >
        <ChatBox />
        <ChatForm />
        {/* {CHAT VIEW CLOSED} */}
      </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
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
