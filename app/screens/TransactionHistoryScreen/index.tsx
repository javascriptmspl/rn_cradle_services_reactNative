import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { RegularText, SmallText, TitleText } from "../../components/MyText";
import { COLORS } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TransactionHistoryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout title="Transaction History" onBack={navigation.goBack}>
      <View style={{flex:1, padding:20}}>
      <TitleText bold>Transactions</TitleText>

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
                <View style={{ flex: 1 }}>
                  <RegularText bold>15/04/2023</RegularText>
                  <SmallText>Booking no. #9199</SmallText>
                </View>
                <RegularText style={{ color: "green" }}>$45.90</RegularText>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 15,
    gap: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 15,
    alignItems: "center",
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
