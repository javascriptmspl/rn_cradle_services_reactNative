import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import Roofing from "../../../assets/images/Categories/roofing.svg";
import Electrician from "../../../assets/images/Categories/electrician.svg";
import Cleaning from "../../../assets/images/Categories/cleaning.svg";
import Fitting from "../../../assets/images/Categories/fittings.svg";
import Plumbing from "../../../assets/images/Categories/plumbing.svg";
import Painting from "../../../assets/images/Categories/painting.svg";
import { RegularText } from "../../components/MyText";
import { getRandomColor } from "../../utils/helper";

const data = [
  {
    title: "Roofing",
    icon: <Roofing />,
  },
  { title: "Electrician", icon: <Electrician />, navigate: "Electrician" },
  { title: "Cleaning", icon: <Cleaning /> },
  { title: "Fitting", icon: <Fitting /> },
  { title: "Plumbing", icon: <Plumbing /> },
  { title: "Painting", icon: <Painting /> },
  { title: "Maid", icon: <Roofing /> },
  { title: "House Repair", icon: <Electrician /> },
  { title: "Cleaning", icon: <Painting /> },
];

const CategoryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout title="Category" onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return (
              <View
                style={{ marginHorizontal: 20, height: 180, marginBottom: 10 }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "contain",
                  }}
                  source={require("../../../assets/images/Offer.png")}
                />
              </View>
            );
          }}
          numColumns={3}
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("SingleCategory")}
                style={styles.container}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: getRandomColor(),
                    height: 70,
                    width: 70,
                    borderRadius: 100,
                  }}
                >
                  {item.icon}
                </View>
                <RegularText bold>{item.title}</RegularText>
              </TouchableOpacity>
            );
          }}
        />
        {/* <View style={{ marginHorizontal: 20, height: 180, marginBottom: 10 }}>
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("../../../assets/images/Offer.png")}
          />
        </View> */}
      </View>
    </MainLayout>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 15,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingTop: 5,
  },
});
