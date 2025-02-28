import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeleteServicePopup from "../../components/popups/DeleteServicePopup";
import { RegularText, SmallText } from "../../components/MyText";

const ManageServicesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <MainLayout title="Manage Services" onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => {
            return (
              <View style={styles.container}>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 45,
                    resizeMode: "cover",
                  }}
                  source={require("../../../assets/images/img2.png")}
                />
                <View style={{ flex: 1 }}>
                  <RegularText bold>Plumbing</RegularText>
                  <SmallText>$20/hr</SmallText>
                </View>
                <MaterialIcons
                  onPress={() => navigation.navigate("EditService")}
                  name="mode-edit"
                  size={24}
                  color="gray"
                />
                {isModalVisible && (
                  <DeleteServicePopup onHide={() => setIsModalVisible(false)} />
                )}
                <AntDesign onPress={()=>setIsModalVisible(true)} name="delete" size={24} color="gray" />
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default ManageServicesScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
