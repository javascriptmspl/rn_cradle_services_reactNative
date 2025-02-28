import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import {
  BigText,
  RegularText,
  RegularTextGray,
  Text25,
} from "../../components/MyText";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import Input from "../../components/Input";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ForgptPasswordModal from "../../modals/ForgotPassowrdModal";

const ForgotPasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <MainLayout title="Forgot Password" onBack={navigation.goBack}>
      <ScrollView style={{ flex: 1, marginHorizontal: 20, paddingTop: 20 }}>
        {isModalVisible && (
          <ForgptPasswordModal onHide={() => setModalVisible(false)} />
        )}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <RegularText>We will send a mail to</RegularText>
            <RegularText>the email address you registered</RegularText>
            <RegularText>to regain your password</RegularText>
          </View>

          <Input
            icon={() => (
              <MaterialIcons name="email" size={24} color={COLORS.primary} />
            )}
            placeholder="Email Address"
          />

          <PrimaryBtn 
          onPress={() => setModalVisible(true)}
           text="Send" 
            containerStyle={{ marginTop: 30 }}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ForgotPasswordScreen;
