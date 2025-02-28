import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
import useKeyboardTabHide from "../../hooks/useKeyboardTabHide";
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from "../../styles";
import MenuIcon from "../../../assets/icon/svg/menu-left.svg";
import MenuIconWhite from "../../../assets/icon/svg/menu-leftWhite.svg";
import OptionIcon from "../../../assets/icon/svg/options.svg";
import {
  MediumText,
  RegularText,
  RegularTextGray,
  SmallText,
  SmallText10,
  SmallTextB,
  Text22,
  Text25,
  TitleText,
} from "../../components/MyText";
import AntDesign from "react-native-vector-icons/AntDesign";
import Roofing from "../../../assets/images/Categories/roofing.svg";
import Electrician from "../../../assets/images/Categories/electrician.svg";
import Cleaning from "../../../assets/images/Categories/cleaning.svg";
import Fitting from "../../../assets/images/Categories/fittings.svg";
import Plumbing from "../../../assets/images/Categories/plumbing.svg";
import Painting from "../../../assets/images/Categories/painting.svg";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";

const data = [
  {
    title: "Roofing",
    icon: <Roofing />,
  },
  { title: "Electrician", icon: <Electrician /> },
  { title: "Cleaning", icon: <Cleaning /> },
  { title: "Fitting", icon: <Fitting /> },
  { title: "Plumbing", icon: <Plumbing /> },
  { title: "Painting", icon: <Painting /> },
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Item = ({ item, index }: any) => {
  const [like, setLike] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <View
      style={{
        height: 230,
        marginRight: 18,
        width: 140,
        borderRadius: 10,
      }}
    >
      {/* {LIKE} */}
      <TouchableOpacity
        onPress={() => setLike(!like)}
        style={{
          position: "absolute",
          backgroundColor: "white",
          height: 25,
          width: 25,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          top: 105,
          right: 10,
        }}
      >
        <AntDesign name={like ? "heart" : "hearto"} size={15} color="red" />
      </TouchableOpacity>
      {/* {} */}
      <View style={{ height: "52%", width: "100%" }}>
        {index % 2 === 0 ? (
          <Image
            style={styles.img}
            source={require("../../../assets/images/img1.png")}
          />
        ) : (
          <Image
            style={styles.img}
            source={require("../../../assets/images/img2.png")}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ServiceProviderProfile")}
        style={{
          height: "48%",
          backgroundColor: getRandomColor(),
          width: "100%",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <RegularText bold style={{ color: "white" }}>
          Johan Smith
        </RegularText>
        <SmallText bold style={{ color: "white" }}>
          10 year Experience
        </SmallText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <SmallText10 bold style={{ color: "white" }}>
            4.9
          </SmallText10>
        </View>
        <SmallText bold style={{ color: "white" }}>
          $20.00/hr
        </SmallText>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const mode = useSelector((s: RootState) => s.auth.mode);

  const isAppMode = mode === "Consumer";

  useKeyboardTabHide();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <ImageBackground
        style={{ height: "100%", width: "100%", flex: 1 }}
        source={require("../../../assets/images/Background.png")}
      >
        {/* {HEADER} */}
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            {isAppMode ? <MenuIcon /> : <MenuIconWhite />}
            <Feather
              onPress={() => navigation.navigate("Notification")}
              name="bell"
              size={24}
              color={!isAppMode ? "white" : "black"}
            />
          </View>

          {isAppMode ? (
            <>
              <Text25 bold style={{ marginLeft: 20 }}>
                Provide You Better
              </Text25>
              <Text22 bold style={{ marginLeft: 20, color: COLORS.primary }}>
                Clean House
              </Text22>
            </>
          ) : (
            <>
              <Text22
                bold
                style={{ marginLeft: 20, color: COLORS.white, marginTop: 15 }}
              >
                Hi John Doe
              </Text22>
              <Text25
                bold
                style={{
                  marginLeft: 20,
                  color: COLORS.white,
                  marginBottom: 30,
                }}
              >
                Welcome Back
              </Text25>
            </>
          )}
        </View>

        {/* {SEARCH INPUT} */}
        {isAppMode && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              margin: 20,
            }}
          >
            <View style={styles.input}>
              <EvilIcons name="search" size={30} color="gray" />
              <TextInput
                placeholderTextColor={"gray"}
                placeholder="Search Here"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Filter")}
              style={styles.filterBtn}
            >
              <MaterialCommunityIcons
                name="filter-variant"
                size={30}
                color="tomato"
              />
            </TouchableOpacity>
          </View>
        )}
        {/* {SEARCH INPUT END} */}

        {/* {CONTENT} */}
        {isAppMode ? (
          <View style={styles.contentView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <TitleText bold>Category</TitleText>
              <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                <RegularTextGray>See All</RegularTextGray>
              </TouchableOpacity>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingLeft: 15,
                height: 150,
              }}
              horizontal
              data={data}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    onPress={() => navigation.navigate("SingleCategory")}
                    style={styles.fl1}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: getRandomColor(),
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                      }}
                    >
                      {item.icon}
                    </View>
                    <RegularText bold>{item.title}</RegularText>
                  </Pressable>
                );
              }}
            />
            <View
              style={{ marginHorizontal: 20, height: 180, marginBottom: 10 }}
            >
              <Image
                style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                source={require("../../../assets/images/Offer.png")}
              />
            </View>

            {/* {2nd LIST} */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <TitleText bold>Recommended</TitleText>
              <TouchableOpacity
                onPress={() => navigation.navigate("RecommendedAll")}
              >
                <RegularTextGray>See All</RegularTextGray>
              </TouchableOpacity>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5]}
              contentContainerStyle={{ paddingLeft: 20 }}
              horizontal
              renderItem={({ item, index }: any) => {
                return <Item item={item} index={index} />;
              }}
            />
          </View>
        ) : (
          <View style={styles.contentView}>
            <View style={{ flex: 1, padding: 20 }}>
              <MediumText style={{marginBottom:15}} bold>Explore your</MediumText>

              {/* {OPTIONS} */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                onPress={()=>navigation.navigate('UpcomingBooking')}
                style={styles.optionBtn}>
                  <View style={styles.optionIcon}>
                    <AntDesign name="calendar" size={20} color="white" />
                  </View>
                  <RegularText bold>Upcoming Bookings</RegularText>
                  <MediumText bold>12</MediumText>
                </Pressable>

                <Pressable
                 onPress={()=>navigation.navigate('Earnings')}
                style={styles.optionBtn}>
                  <View
                    style={[styles.optionIcon, { backgroundColor: "#FFA500" }]}
                  >
                    <Feather name="dollar-sign" size={24} color="white" />
                  </View>
                  <RegularText bold>Earnings</RegularText>
                  <MediumText bold>$235</MediumText>
                </Pressable>
              </View>

              {/* {METRICS} */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",marginTop:20
                }}
              >
                <MediumText bold>Performance Metrics</MediumText>
                <TouchableOpacity>
                  <RegularTextGray bold>See All</RegularTextGray>
                </TouchableOpacity>
              </View>

              <View>
                <Image style={{height:250, width:'100%', resizeMode:'contain'}} source={require("../../../assets/images/graph.png")}/>
              </View>

              {/* {END} */}
            </View>
          </View>
        )}
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: COLORS.bg,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  fl1: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    width: 100,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingTop: 5,
  },
  img: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  filterBtn: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 2,
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    flex: 1,
  },
  optionBtn: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "48%",
    paddingVertical: 25,
    borderRadius: 15,
  },
  optionIcon: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
