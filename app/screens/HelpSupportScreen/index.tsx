import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  RegularText,
  SmallText,
} from "../../components/MyText";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../styles";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import Zocial from "react-native-vector-icons/Zocial";
import { Linking } from "react-native";

const HelpSupportScreen = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleAnswer = (index: any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Functions to handle clicks
  // const handlePhonePress = () => {
  //   Linking.openURL("tel:022228910856");
  // };

  // const handleEmailPress = () => {
  //   Linking.openURL("mailto:vaccance@gmail.com");
  // };

  // const handleWebsitePress = () => {
  //   Linking.openURL("http://www.meander.software");
  // };

  return (
    <MainLayout onBack={navigation.goBack} title="Support">
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={{ marginTop: 40, paddingHorizontal: 5 }}>
          <TouchableOpacity style={styles.container}
          //  onPress={handlePhonePress}
           >
            <View style={styles.view}>
              <Zocial name="call" size={18} color={COLORS.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <SmallText>Talk to us</SmallText>
              <RegularText>022228910856</RegularText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container} 
          // onPress={handleEmailPress}
          >
            <View style={styles.view}>
              <MaterialIcons name="email" size={15} color={COLORS.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <SmallText>Write us at</SmallText>
              <RegularText>vaccance@gmail.com</RegularText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container}
          //  onPress={handleWebsitePress}
           >
            <View style={styles.view}>
              <MaterialIcons name="email" size={15} color={COLORS.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <SmallText>Website</SmallText>
              <RegularText>www.meander.software</RegularText>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default HelpSupportScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    marginBottom: 15,
  },
  view: {
    height: 30,
    width: 30,
    backgroundColor: "#FFEFDA",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
