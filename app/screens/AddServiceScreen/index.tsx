import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AddStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { MediumText, RegularText } from "../../components/MyText";
import Input2 from "../../components/Input2";
import Input from "../../components/Input";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";

const AddServiceScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AddStackParams>>();
  return (
    <MainLayout title="Add Service" onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{flex:1}}>

        <MediumText bold>Add Service</MediumText>

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

export default AddServiceScreen;

const styles = StyleSheet.create({
  description: {
    height: 120,
    backgroundColor: "#F4F5F7",
    borderRadius: 15,
  },
});
