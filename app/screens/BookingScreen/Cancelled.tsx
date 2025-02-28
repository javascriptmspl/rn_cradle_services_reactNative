import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import { ProfileStackParams } from "../../navigation/types";
import {
  RegularText,
  SmallText,
  SmallText10,
  SmallTextB,
} from "../../components/MyText";

const data = [
  {
    name: "Harry Potter",
    skill: "Maid",
    price: "12.00/hr",
    img: require("../../../assets/images/img6.png"),
  },
  {
    name: "John Cena",
    skill: "Painter",
    price: "40.00/hr",
    img: require("../../../assets/images/img3.png"),
  },
  {
    name: "Mark Wood",
    skill: "Cleaner",
    price: "69.00/hr",
    img: require("../../../assets/images/img4.png"),
  },
  {
    name: "John Smith",
    skill: "Electrician",
    price: "78.00/hr",
    img: require("../../../assets/images/img1.png"),
  },
  {
    name: "Dwyane Rock",
    skill: "Electrician",
    price: "35.00/hr",
    img: require("../../../assets/images/img2.png"),
  },
  {
    name: "Andrew Simons",
    skill: "Plumber",
    price: "25.00/hr",
    img: require("../../../assets/images/img5.png"),
  },
];

const Item = ({ name, skill, price, img }: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <Pressable
    onPress={()=>{navigation.navigate('CancelledBooking')}}
    style={styles.container}>
      <View style={styles.imgView}>
        <Image
          style={{ height: "100%", width: "100%", borderRadius: 100 }}
          source={img}
        />
      </View>
      <View style={{ flex: 1 }}>
        {/* {NAME} */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <RegularText bold>{name}</RegularText>
          <View style={styles.btn}>
            <SmallText10 bold style={{ color: "white" }}>
              Cancelled
            </SmallText10>
          </View>
        </View>
        {/* {LOCATION} */}

        <SmallText bold>{skill}</SmallText>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
            gap: 2,
          }}
        >
          <AntDesign name="star" size={12} color="#FFC107" />
          <AntDesign name="star" size={12} color="#FFC107" />
          <AntDesign name="star" size={12} color="#FFC107" />
          <AntDesign name="star" size={12} color="#FFC107" />
          <AntDesign name="star" size={12} color="lightgray" />
          <SmallTextB bold> 4.5</SmallTextB>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="calendar" size={12} color="gray" />
          <SmallText10 bold style={{ marginRight: 10 }}>
            20 Dec, 2024
          </SmallText10>
          <Foundation name="dollar" size={20} color="red" />
          <SmallText10 bold>${price}</SmallText10>
        </View>

        {/* {END} */}
      </View>
    </Pressable>
  );
};

const Cancelled = () => {
  
  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 90 }}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => {
          return (
            <Item
              img={item.img}
              name={item.name}
              skill={item.skill}
              price={item.price}
            />
          );
        }}
      />
    </View>
  );
};

export default Cancelled;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 1,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    marginHorizontal: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  imgView: {
    height: 80,
    width: 80,
    backgroundColor: "lightgray",
    borderRadius: 80,
  },
  btn: {
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "red",
    width: 70,
  },
});
