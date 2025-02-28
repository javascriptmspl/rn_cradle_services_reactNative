import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SmallText, TitleText } from "../../components/MyText";
import LogoutPopup from "../../components/popups/LogoutPopup";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";

type RowProps = {
  text: string;
  icon: () => React.ReactNode;
  onPress?: () => void;
};

const Row = ({ text, icon, onPress }: RowProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 15,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: "white",
      }}
    >
      <View
        style={{ width: 30, alignItems: "center", justifyContent: "center" }}
      >
        {icon && icon()}
      </View>
      <Text
        style={{ flex: 1, color: "black", fontWeight: "600", fontSize: 17 }}
      >
        {text}
      </Text>
      <Entypo name="chevron-small-right" color="black" size={30} />
    </TouchableOpacity>
  );
};

const AccountScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const mode = useSelector((s: RootState) => s.auth.mode);

  const isAppMode = mode === "Consumer";

  return (
    <MainLayout onBack={navigation.goBack} title="Profile">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, padding: 20 }}
      >
        {/* {INFO} */}
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.info}
        >
          <View style={styles.img}>
            <Image
              style={styles.img}
              source={require("../../../assets/images/img1.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View>
              <TitleText bold>John Smith</TitleText>
              <SmallText>Basic Member</SmallText>
            </View>
            <AntDesign name="right" size={20} color={COLORS.primary} />
          </View>
        </TouchableOpacity>

        {/* {ACCOUNT OPTIONS} */}
        <View style={styles.accountOptions}>
          <View style={styles.accountText}>
            <TitleText bold style={{ color: "white" }}>
              Accounts
            </TitleText>
          </View>
          {/* {ROW} */}
          <View style={{ paddingHorizontal: 5 }}>
            <Row
              text="Change Password"
              icon={() => <FontAwesome name="lock" size={24} color="black" />}
              onPress={() => navigation.navigate("ChangePassword")}
            />

            {isAppMode && (
              <>
                <Row
                  onPress={() => navigation.navigate("Booking")}
                  text="Order Management"
                  icon={() => (
                    <FontAwesome name="bell" size={20} color="black" />
                  )}
                />
                <Row
                  onPress={() => navigation.navigate("Membership")}
                  text="Premium Membership"
                  icon={() => (
                    <AntDesign name="creditcard" size={24} color="black" />
                  )}
                />
              </>
            )}

            {!isAppMode && (
              <>
                <Row
                  onPress={() => navigation.navigate("ManageServices")}
                  text="Manage Services"
                  icon={() => (
                    <Fontisto name="graphql" size={24} color="black" />
                  )}
                />
                <Row
                  onPress={() => navigation.navigate("Analytics")}
                  text="Analytics & Reports"
                  icon={() => (
                    <Foundation name="graph-trend" size={24} color="black" />
                  )}
                />
                <Row
                  onPress={() => navigation.navigate('ManageAvailability')}
                  text="Manage Availability"
                  icon={() => (
                    <MaterialCommunityIcons
                      name="clock-time-four"
                      size={24}
                      color="black"
                    />
                  )}
                />
              </>
            )}

            <LogoutPopup
              visible={logoutPopupVisible}
              onCancel={() => setLogoutPopupVisible(false)}
            />
            <Row
              onPress={() => {
                setLogoutPopupVisible(true);
              }}
              text="Sign Out"
              icon={() => (
                <MaterialIcons name="logout" size={24} color="black" />
              )}
            />
          </View>
        </View>

        {/* {MORE OPTIONS} */}
        <TitleText bold style={{ color: COLORS.primary, marginLeft: 20 }}>
          More Options
        </TitleText>
        <View style={styles.accountOptions}>
          {/* {ROW} */}
          <View style={{ paddingHorizontal: 5, paddingBottom: 15 }}>
            <Row
              onPress={() =>
                navigation.navigate(isAppMode ? "RateUs" : "ProviderReviews")
              }
              text="Rating & Reviews"
              icon={() => (
                <MaterialIcons name="settings" size={24} color="black" />
              )}
            />

            <Row
              onPress={() => navigation.navigate("HelpSupport")}
              text="Help & Support"
              icon={() => (
                <AntDesign name="customerservice" size={24} color="black" />
              )}
            />

            {/* <Row
             onPress={()=>navigation.navigate('MyInvoice')}
              text="My Invoices "
              icon={() => (
                <FontAwesome5 name="file-invoice" size={24} color="black" />
              )}
            /> */}

            <Row
              onPress={() => navigation.navigate("TermsCondition")}
              text="Terms & Conditions"
              icon={() => (
                <Entypo name="help-with-circle" size={24} color="black" />
              )}
            />

            <Row
              onPress={() => navigation.navigate("PrivacyPolicy")}
              text="Privacy Policy"
              icon={() => (
                <FontAwesome5 name="file-invoice" size={24} color="black" />
              )}
            />
            <Row
              onPress={() => navigation.navigate("Faq")}
              text="FAQs"
              icon={() => (
                <Entypo name="help-with-circle" size={24} color="black" />
              )}
            />

            <Row
              onPress={() => navigation.navigate("CookiePolicy")}
              text="Cookie Policy"
              icon={() => (
                <FontAwesome5 name="file-invoice" size={24} color="black" />
              )}
            />

            <Row
              onPress={() => navigation.navigate("AboutUs")}
              text="About Us"
              icon={() => (
                <Entypo name="help-with-circle" size={24} color="black" />
              )}
            />
          </View>
        </View>

        {/* {END} */}
      </ScrollView>
    </MainLayout>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  info: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
    paddingVertical: 15,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "gray",
  },
  accountOptions: {
    backgroundColor: "white",
    paddingBottom: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 15,
  },
  accountText: {
    backgroundColor: COLORS.primary,
    paddingLeft: 35,
    paddingVertical: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
