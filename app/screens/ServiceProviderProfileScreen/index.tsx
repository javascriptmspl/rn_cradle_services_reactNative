import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams, ProfileStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import {
  BigText,
  RegularText,
  RegularTextGray,
  SmallText,
  Text22,
  TitleText,
} from "../../components/MyText";
import PrimaryBtn from "../../components/PrimaryBtn";

const IMAGE_URI = require("../../../assets/images/img3.png");

const data = [
  {
    name: "Alexa",
    img: "https://st4.depositphotos.com/12852350/41021/i/450/depositphotos_410212674-stock-photo-portrait-shooting-stylish-girl-beige.jpg",
  },
  {
    name: "Samantha",
    img: "https://www.shutterstock.com/image-photo/self-portrait-beautiful-chinese-girl-260nw-1289866381.jpg",
  },
  {
    name: "Sadia",
    img: "https://www.shutterstock.com/image-photo/head-shot-portrait-confident-attractive-260nw-1940522560.jpg",
  },
];

const ServiceProviderProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <MainLayout onBack={navigation.goBack} title="Profile">
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        {/* {REVIEWS} */}
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 15,
                    paddingVertical: 15,
                  }}
                >
                  <View>
                    <View style={styles.imgView}>
                      <Image style={styles.img} source={IMAGE_URI} />
                    </View>
                  </View>
                  <Text22 bold style={{ textAlign: "center" }}>
                    John Smith {""}
                    <AntDesign
                      name="checkcircle"
                      size={20}
                      color={COLORS.primary}
                    />
                  </Text22>
                  <RegularTextGray
                    style={{ textAlign: "center", marginVertical: 3 }}
                  >
                    10 Year Experience
                  </RegularTextGray>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name="star" size={18} color="#FFC107" />
                    <AntDesign name="star" size={18} color="#FFC107" />
                    <AntDesign name="star" size={18} color="#FFC107" />
                    <AntDesign name="star" size={18} color="#FFC107" />
                    <AntDesign name="star" size={18} color="#FFC107" />
                    <RegularText bold> {""} 4.5</RegularText>
                  </View>
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    $20.00/hr
                  </Text>

                  <View style={styles.reviewsContainer}>
                    <View style={styles.reviews}>
                      <BigText bold>100</BigText>
                      <TitleText>Review</TitleText>
                    </View>

                    <View style={styles.reviews}>
                      <BigText bold>500</BigText>
                      <TitleText>Ongoing</TitleText>
                    </View>

                    <View style={[styles.reviews, { borderRightWidth: 0 }]}>
                      <BigText bold>700</BigText>
                      <TitleText>Clients</TitleText>
                    </View>
                  </View>
                </View>

                {/* {PRIMARY BTN} */}
                <View style={{ marginBottom: 15 }}>
                  <PrimaryBtn
                    containerStyle={{ marginVertical: 20 }}
                    onPress={() => navigation.navigate('BookingOne')}
                    text="Book Now!"
                  />
                </View>
              </>
            );
          }}
          data={data}
          renderItem={({ item }: any) => {
            return (
              <View style={styles.container}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <View style={styles.reviewImg}>
                    <Image
                      style={styles.reviewImg}
                      source={{ uri: item.img }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <TitleText bold>{item.name}</TitleText>
                    <SmallText>01-06-2023</SmallText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      marginBottom: 10,
                    }}
                  >
                    <AntDesign name="star" size={16} color="#FFC107" />
                    <AntDesign name="star" size={16} color="#FFC107" />
                    <AntDesign name="star" size={16} color="#FFC107" />
                    <AntDesign name="star" size={16} color="#FFC107" />
                    <AntDesign name="star" size={16} color="#FFC107" />
                  </View>
                </View>
                <SmallText style={{ marginTop: 5 }}>
                  Wow what a service. Thank you !
                </SmallText>
              </View>
            );
          }}
        />
        {/* {REVIEWS END} */}
      </View>
    </MainLayout>
  );
};

export default ServiceProviderProfileScreen;

const styles = StyleSheet.create({
  imgView: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 135,
    right: 1,
  },
  reviews: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "lightgray",
  },
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    borderTopWidth: 1,
    borderColor: "lightgray",
    paddingTop: 20,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  reviewImg: {
    height: 55,
    width: 55,
    borderRadius: 135,
    backgroundColor: "gray",
  },
});
