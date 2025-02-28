import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import {
  MediumText,
  RegularText,
  RegularTextGray,
  Text22,
  Text25,
  TitleText,
} from "../../components/MyText";

const AnalyticsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout title="Analytics & Reports" onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <View>
                <View style={styles.overview}>
                  <TitleText>Overview of Performance</TitleText>
                  <Text25 bold>$45,000</Text25>
                  <TitleText bold>
                    Last weeks <RegularText> +12%</RegularText>
                  </TitleText>
                </View>
                <Text22 bold>Top Performing Services</Text22>
              </View>
            );
          }}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.container}>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    resizeMode: "cover",
                  }}
                  source={
                    index % 2 == 0
                      ? require("../../../assets/images/img1.png")
                      : require("../../../assets/images/img2.png")
                  }
                />
                <View>
                  <TitleText bold>{index % 2 == 0 ? 'Plumbing' : 'Pipe Fitting'}</TitleText>
                  <RegularTextGray>Revenue Generated: ${index % 2 == 0 ? '78.00' : '35.00'}</RegularTextGray>
                </View>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default AnalyticsScreen;
const styles = StyleSheet.create({
  overview: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    gap: 10,
    marginBottom: 25,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    gap: 10,
    flexDirection: "row",marginTop:15
  },
});
