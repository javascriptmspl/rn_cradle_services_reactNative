import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import Entypo from "react-native-vector-icons/Entypo";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RegularText, RegularTextGray } from "../../components/MyText";
import { onShare } from "../../utils/helper";

type RowProps = {
    text: string;
    onPress?: () => void;
  };
  
  const Row = ({ text, onPress }: RowProps) => {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: "row",
            alignItems: "center",justifyContent:'space-between',
            marginTop: 20,
            paddingBottom: 7,borderBottomWidth:1,borderBottomColor:'lightgray',
          }}
        >
          <Text style={{color: "black" }}>{text}</Text>
          <Entypo name="chevron-small-right" color="black" size={30} />
        </TouchableOpacity>
      </React.Fragment>
    );
  };


const HelpOptionsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [selectedId, setSelectedId] = React.useState<null | number>(null);
  return (
    <MainLayout title="Help & Support" onBack={navigation.goBack}>
      <View style={{ flex: 1, marginHorizontal: 20, }}>
     <Row onPress={()=>navigation.navigate('TermsAndConditions')} text="Terms & Conditions" />
     <Row onPress={()=>navigation.navigate('Faq')} text="FAQs" />
     <Row onPress={()=>navigation.navigate('PrivacyPolicy')} text="Privacy Policy" />
     <Row onPress={onShare} text="Refer & Earn" />
     <Row onPress={()=>navigation.navigate('RateUs')} text="Rate Us" />
     <Row onPress={()=>navigation.navigate('HelpSupport')} text="Help & Supoort" />
      </View>
    </MainLayout>
  );
};

export default HelpOptionsScreen;


