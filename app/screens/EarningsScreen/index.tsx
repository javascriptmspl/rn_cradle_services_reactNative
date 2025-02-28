import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { COLORS } from "../../styles";
import {
  MediumText,
  RegularText,
  SmallText,
  Text22,
  Text25,
  TitleText,
} from "../../components/MyText";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const EarningsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout title="Earnings" onBack={navigation.goBack}>
      <FlatList 
      showsVerticalScrollIndicator={false}
        data={[1]}
        renderItem={() => {
          return (
            <View style={{ flex: 1, padding: 20 }}>
              {/* {CONTAINER} */}
              <View style={styles.container}>
                <RegularText style={{ color: "white", alignSelf: "center" }}>
                  Last Month
                </RegularText>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <AntDesign name="left" size={25} color="white" />
                  <Text25 style={{ color: "white" }}>$3,780.23</Text25>
                  <AntDesign name="right" size={25} color="white" />
                </View>

                <View style={styles.orderView}>
                  <SmallText style={{ color: "white" }}>25 Orders</SmallText>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="clock-time-four-outline"
                      size={20}
                      color="white"
                    />
                    <SmallText style={{ color: "white" }}>22d 11hr</SmallText>
                  </View>
                </View>
              </View>

              {/* {OPTIONS} */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  onPress={() => navigation.navigate("UpcomingBooking")}
                  style={styles.optionBtn}
                >
                  <View style={styles.optionIcon}>
                    <MaterialCommunityIcons
                      name="check-all"
                      size={30}
                      color="white"
                    />
                  </View>
                  <RegularText>Weekly Earnings</RegularText>
                  <MediumText bold>$3,825</MediumText>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate("Earnings")}
                  style={styles.optionBtn}
                >
                  <View style={styles.optionIcon}>
                    <AntDesign name="creditcard" size={30} color="white" />
                  </View>
                  <RegularText>Weekly Orders</RegularText>
                  <MediumText bold>235</MediumText>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  onPress={() => navigation.navigate("UpcomingBooking")}
                  style={styles.optionBtn}
                >
                  <View style={styles.optionIcon}>
                    <AntDesign name="staro" size={30} color="white" />
                  </View>
                  <RegularText>Weekly Ratings</RegularText>
                  <MediumText bold>12</MediumText>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate("Earnings")}
                  style={styles.optionBtn}
                >
                  <View style={styles.optionIcon}>
                    <MaterialCommunityIcons
                      name="clock-time-twelve-outline"
                      size={30}
                      color="white"
                    />
                  </View>
                  <RegularText>Active Hours</RegularText>
                  <MediumText bold>$235</MediumText>
                </Pressable>
              </View>

              {/* {FLAT LIST} */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <TitleText bold>Transactions</TitleText>
                <TouchableOpacity onPress={() => navigation.navigate("TransactionHistory")}>
                  <RegularText style={{ color: COLORS.primary }}>
                    See all
                  </RegularText>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={() => {
                  return (
                    <View style={styles.list}>
                      <View style={styles.listIcon}>
                        <MaterialCommunityIcons
                          name="bank-outline"
                          size={20}
                          color={COLORS.primary}
                        />
                      </View>
                      <View style={{flex:1}}>
                        <RegularText bold>15/04/2023</RegularText>
                        <SmallText>Booking no. #9199</SmallText>
                      </View>
                      <RegularText style={{color:'green'}}>$45.90</RegularText>
                    </View>
                  );
                }}
              />
              {/* {END} */}
            </View>
          );
        }}
      />
    </MainLayout>
  );
};

export default EarningsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 15,
    paddingBottom: 20,
  },
  orderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 25,
  },
  optionBtn: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "48%",
    paddingVertical: 25,
    borderRadius: 15,
    marginTop: 20,
  },
  optionIcon: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  list: {
    flexDirection: "row",
    padding: 15,
    gap: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 15,
    alignItems:'center'
  },
  listIcon: {
    height: 35,
    width: 35,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
