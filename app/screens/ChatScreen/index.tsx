import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import { RegularText, SmallTextB } from "../../components/MyText";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { chatUserList } from "../../utils/dummy";

// const SearchChat = ({ searchKeyword, setSearchKeyword }: any) => {
//   return (
//     <View
//       style={{
//         opacity: 0.8,
//         backgroundColor: "rgba(0,0,0,0.04)",
//         marginVertical: 15,
//         alignSelf: "center",
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 20,
//         borderRadius: 40,
//         marginHorizontal: 30,
//         height: 45,
//       }}
//     >
//       <Feather name="search" color={"gray"} size={18} />
//       <TextInput
//         style={{
//           color: COLORS.black,
//           width: "90%",
//           marginHorizontal: 10,
//         }}
//         value={searchKeyword}
//         onChangeText={(text) => setSearchKeyword(text)}
//         placeholder="Search by pet name here"
//         placeholderTextColor="#999"
//       />
//     </View>
//   );
// };

const UserListItem = ({ item, index }: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Message");
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
          <SmallTextB bold
            style={{
              marginBottom: 20,
            }}
          >
            { index === 0 && '25 min'}
            { index === 1 && '30 min'}
            { index === 2 && '40 min'}
            { index === 3 && '55 min'}
          </SmallTextB>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout
      onBack={navigation.goBack}
      title="Messenger"
      //@ts-ignore
      viewStyles={{ marginVertical: 0, paddingHorizontal: 20 }}
    >
      <View style={{ flex: 1 }}>
        {/* <SearchChat searchKeyword={""} setSearchKeyword={() => {}} /> */}

        <FlatList ListHeaderComponent={()=>{
          return(
            <RegularText bold style={{paddingTop:20, paddingLeft:15, marginBottom:15}}>Messages</RegularText>
          )
        }}
          data={chatUserList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: any) => {
            return <UserListItem index={index} item={item} />;
          }}
        />
        {/* <MyTabs /> */}

        {/* HEADER */}
      </View>
    </MainLayout>
  );
};

export default ChatScreen;
