
import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AddStackParams, ProfileStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { MediumText, RegularText } from "../../components/MyText";
import Input from "../../components/Input";
import PrimaryBtn from "../../components/PrimaryBtn";

const EditServiceScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout title="Edit Service" onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{flex:1}}>

        <MediumText bold>Edit Service</MediumText>

        <RegularText bold style={{ marginBottom: -10, marginTop: 15 }}>
          Service Name
        </RegularText>
        <Input placeholder="Enter service name" />

        <RegularText bold style={{ marginBottom: -10, marginTop: 15 }}>
          Hourly Rate
        </RegularText>
        <Input placeholder="Enter service name" />

        <RegularText bold style={{ marginBottom: 10, marginTop: 15 }}>
          Description
        </RegularText>

        <View style={styles.description}>
          <TextInput
            style={{ flex: 1, textAlignVertical: "top" }}
            placeholder="Write short description"
            />
            </View>
        </View>

        <PrimaryBtn 
        onPress={()=>navigation.goBack()}
        text="Save" containerStyle={{marginBottom:12}}/>
      </View>
    </MainLayout>
  );
};

export default EditServiceScreen;

const styles = StyleSheet.create({
  description: {
    height: 120,
    backgroundColor: "#F4F5F7",
    borderRadius: 15,
  },
});
