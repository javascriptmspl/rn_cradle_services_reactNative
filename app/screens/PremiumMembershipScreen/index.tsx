import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import MainLayout from "../../components/MainLayout";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import { MediumText, SmallText, TitleText } from "../../components/MyText";

const MembershipScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Basic");
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const membershipOptions = [
    {
      id: "Basic",
      name: "Basic",
      price: "$9.99",
      details: "12km distance + SP starter pack",
    },
    {
      id: "Silver",
      name: "Silver",
      price: "$19.99",
      details: "24km distance + SP + dinner",
    },
    {
      id: "Premium",
      name: "Premium",
      price: "$49.99",
      details: "42km distance + 1 extra life",
    },
  ];

  const renderOption = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        selectedOption === item.id && styles.selectedOption,
      ]}
      onPress={() => setSelectedOption(item.id)}
    >
      <View style={styles.optionHeader}>
        <TitleText
          bold
          style={{ color: selectedOption === item.id ? "white" : "black" }}
        >
          {item.name}
        </TitleText>
        <MediumText bold
          style={{ color: selectedOption === item.id ? "white" : "black" }}>{item.price}</MediumText>
      </View>
      <SmallText bold
          style={{ color: selectedOption === item.id ? "white" : "gray" }}>{item.details}</SmallText>
    </TouchableOpacity>
  );

  return (
    <MainLayout title="Membership" onBack={navigation.goBack}>
      <SafeAreaView style={styles.container}>
        <View style={styles.checkList}>
          <Text style={styles.checkText}>✔ Lorem ipsum dolor sit amet</Text>
          <Text style={styles.checkText}>
            ✔ Lorem ipsum, or lipsum as it is
          </Text>
          <Text style={styles.checkText}>
            ✔ Dummy text used in laying out print
          </Text>
          <Text style={styles.checkText}>✔ Graphic or web designs passage</Text>
        </View>
        <FlatList
          data={membershipOptions}
          renderItem={renderOption}
          keyExtractor={(item) => item.id}
          style={styles.optionsList}
        />
        <PrimaryBtn containerStyle={{ marginBottom: 20 }} text="Continue" />
      </SafeAreaView>
    </MainLayout>
  );
};

export default MembershipScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  checkList: {
    marginBottom: 20,
  },
  checkText: {
    fontSize: 16,
    marginVertical: 5,
    color: "gray",
  },
  optionsList: {
    marginBottom: 20,
  },
  optionContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
  selectedOption: {
    borderColor: "green",
    backgroundColor: COLORS.primary,
  },
  optionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionPrice: {
    fontSize: 16,
    color: "green",
  },
  optionDetails: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  continueButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
