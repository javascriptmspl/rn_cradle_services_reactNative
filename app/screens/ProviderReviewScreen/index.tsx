import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { RegularText, SmallText } from "../../components/MyText";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ProviderReviewsScreen = () => {
  const IMG_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMopZ6NwS9W5gycf5QENgSURRvW2lng0GN1w&s";
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout title="Reviews" onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => {
            return (
              <View style={styles.container}>

                <View style={styles.imgView}>
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 45,
                      resizeMode: "cover",
                    }}
                    source={{ uri: IMG_URL }}
                  />
                  <View style={{ flex: 1 }}>
                    <RegularText bold>Alexa</RegularText>
                    <SmallText>01-12-2023</SmallText>
                  </View>
                  <View style={styles.starRow}>
                    <FontAwesome name="star" size={15} color="#FFBE00" />
                    <FontAwesome name="star" size={15} color="#FFBE00" />
                    <FontAwesome name="star" size={15} color="#FFBE00" />
                    <FontAwesome name="star" size={15} color="#FFBE00" />
                    <FontAwesome name="star" size={15} color="#FFBE00" />
                  </View>
                </View>

<SmallText>I have booked him over 10 times. Good behaviour and good service.</SmallText>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default ProviderReviewsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  imgView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,marginBottom:10
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
});
