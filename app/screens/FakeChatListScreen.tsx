import { View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { RegularText, SmallTextB } from "../components/MyText";
import { ProfileStackParams } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import MainLayout from "../components/MainLayout";

const chatUserList = [
  {
    name: "Kristine",
    bio: "Till Tommorow...",
    image:
      "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg",
  },
  {
    name: "Kay Hicks",
    bio: "Yes, Perfect!",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Scout",
    bio: "yeah sure!",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Mortal",
    bio: "Thanks for getting in tou...",
    image:
      "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const UserListItem = ({ item, index }: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        //@ts-ignore
        navigation.navigate("FakeChat", { name: item?.name, img: item?.image });
      }}
      style={{
        backgroundColor: "white",
        marginBottom: 10,
        marginHorizontal: 15,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          margin: 2,
          padding: 10,
          flexDirection: "row",
          alignItems: "flex-end",
          maxWidth: 400,
        }}
      >
        {
          item?.image ? (
            <Image
              source={{ uri: item?.image }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                resizeMode: "cover",
              }}
            />
          ) : null
          // <DefaultImage iconSize={50} />
        }
        <View
          style={{
            marginLeft: 20,
          }}
        >
          <RegularText
            style={{
              fontSize: 16,
              color: "#222",
              marginBottom: 5,
            }}
          >
            {item?.name ? item?.name : "Unknown"}
          </RegularText>
          <RegularText style={{ fontSize: 12, color: "#222", opacity: 0.5 }}>
            {item?.bio}
          </RegularText>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <SmallTextB
            bold
            style={{
              marginBottom: 20,
            }}
          >
            {index === 0 && "25 min"}
            {index === 1 && "30 min"}
            {index === 2 && "40 min"}
            {index === 3 && "55 min"}
          </SmallTextB>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const FakeChatListScreen = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack}>
    <View>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <RegularText
              bold
              style={{  paddingLeft: 15, marginBottom: 15 }}
            >
              Messages
            </RegularText>
          );
        }}
        data={chatUserList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }: any) => {
          return <UserListItem index={index} item={item} />;
        }}
      />
    </View>
    </MainLayout>
  );
};

export default FakeChatListScreen;
