import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import { HomeStackParams, ProfileStackParams } from "../../navigation/types";
import { RegularText, SmallText, SmallText10, Text25 } from "../../components/MyText";
import MainLayout from "../../components/MainLayout";

const data = [
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
    name: "Andrew Simons",
    skill: "Plumber",
    price: "25.00/hr",
    img: require("../../../assets/images/img5.png"),
  },
  {
    name: "Harry Potter",
    skill: "Maid",
    price: "12.00/hr",
    img: require("../../../assets/images/img6.png"),
  },
];

const Item = ({ name, skill, price, img }: any) => {
  handleDelete = () => {};
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgView}>
        <Image
          style={{ height: "100%", width: "100%", borderRadius: 100 }}
          source={img}
        />
      </TouchableOpacity>
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
        </View>
        {/* {LOCATION} */}

        <SmallText>{skill}</SmallText>
        <SmallText>Iris watson P.O. Box</SmallText>

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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CancelBooking")}
            style={styles.btn}
          >
            <SmallText10 bold style={{ color: "white" }}>
              Decline
            </SmallText10>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TrackActiveBooking")}
            style={styles.btn2}
          >
            <SmallText10 bold>Accept</SmallText10>
          </TouchableOpacity>
        </View>

        {/* {END} */}
      </View>
    </View>
  );
};

const UpcomingBookingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const [todoList, setTodoList] = React.useState(data);

  const deleteTask = (index: number) => {
    setTodoList(todoList.filter((v, i) => i !== index));
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Upcoming Bookings">
      <View style={{ padding: 20 }}>
        <FlatList
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text25 bold>No Bookings!</Text25>
              </View>
            );
          }}
          contentContainerStyle={{ paddingBottom: 90 }}
          data={todoList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: any) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity style={styles.imgView}>
                  <Image
                    style={{ height: "100%", width: "100%", borderRadius: 100 }}
                    source={item.img}
                  />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                  {/* {NAME} */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <RegularText bold>{item.name}</RegularText>
                  </View>
                  {/* {LOCATION} */}

                  <SmallText>{item.skill}</SmallText>
                  <SmallText>Iris watson P.O. Box</SmallText>

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
                    <SmallText10 bold>${item.price}</SmallText10>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                      marginTop: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => deleteTask(index)}
                      style={styles.btn}
                    >
                      <SmallText10 bold style={{ color: "white" }}>
                        Decline
                      </SmallText10>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => deleteTask(index)}
                      style={styles.btn2}
                    >
                      <SmallText10 bold>Accept</SmallText10>
                    </TouchableOpacity>
                  </View>

                  {/* {END} */}
                </View>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default UpcomingBookingScreen;

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
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    marginHorizontal: 2,
    borderRadius: 15,
    padding: 15,
  },
  imgView: {
    height: 80,
    width: 80,
    backgroundColor: "lightgray",
    borderRadius: 80,
  },
  btn: {
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "red",
    width: 70,
  },
  btn2: {
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "gray",
    width: 80,
    borderWidth: 1,
  },
});
