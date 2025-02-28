import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import Input2 from "../../components/Input2";
import { RegularText } from "../../components/MyText";
import { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "../../sheets/sheets";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { COLORS } from "../../styles";
import DatePicker from "react-native-date-picker";
import PrimaryBtn from "../../components/PrimaryBtn";

const ProviderProfileCreateScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [dob, setDob] = useState<any>("");
  const [sex, setSex] = useState("Male");
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const IMG_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

  const openCamera = async () => {
    await launchCamera(
      {
        mediaType: "photo",
      },
      (res: any) => {
        console.log(res);
        setProfilePhotoUri(res.assets[0].uri);
      }
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: "photo",
      },
      (res: any) => {
        console.log({ res }, "sdfsdfds");
        setProfilePhotoUri(res.assets[0].uri);
      }
    );
    closeSheet();
  };

  const closeSheet = async () => {
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  return (
    <MainLayout title="Personal Information" onBack={navigation.goBack}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
          <View style={styles.imgView}>
            {profilePhotoUri ? (
              <Image style={styles.img} source={{ uri: profilePhotoUri }} />
            ) : (
              <Image style={styles.img} source={{ uri: IMG_URL }} />
            )}
            <View style={styles.cameraBtn}>
              <Feather
                onPress={() => {
                  SheetManager.show(SHEETS.CameraAndGalleryOption, {
                    //@ts-ignore
                    payload: { openCamera, openGallery, closeSheet },
                  });
                }}
                name="camera"
                size={18}
                color={COLORS.white}
              />
            </View>
          </View>

          <Input2 title="Name" placeholder="John Doe" />
          <Input2 title="Phone Number" placeholder="+1 (123) 456-7890" />
          <Input2 title="Email" placeholder="johndeo@gmail.com" />

          {/* {DOB} */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>Date of Birth</Text>
            <TouchableOpacity
              onPress={() => setIsDatePickerOpen(true)}
              style={styles.container}
            >
              <DatePicker
                modal
                mode="date"
                open={isDatePickerOpen}
                date={dob || new Date()}
                onConfirm={(dob) => {
                  setIsDatePickerOpen(false);
                  setDob(dob);
                }}
                onCancel={() => {
                  setIsDatePickerOpen(false);
                }}
              />
              <Text
                style={{
                  color: "rgba(0,0,0,0.4)",
                  fontSize: 16,
                }}
              >
                {dob ? dob?.toISOString().slice(0, 10) : "DD - MM - YYYY"}
              </Text>
              <AntDesign name="calendar" size={20} color={"gray"} />
            </TouchableOpacity>
          </View>

          {/* {GENDER} */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>Gender</Text>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.GenderSelectSheet, {
                  //@ts-ignore
                  payload: {
                    onSelect: (s: string) => setSex(s),
                  },
                })
              }
              style={styles.container}
            >
              <RegularText style={{ color: "gray" }}>{sex}</RegularText>
              <AntDesign name="down" size={15} color={"gray"} />
            </TouchableOpacity>
          </View>

          <Input2 title="Current Location" placeholder="204 House Street, Los Angeles" />
          <Input2 title="Skills" placeholder="Plumber" />
          <Input2 title="Experience" placeholder="1 year" />
          <Input2 title="Hourly Rates" placeholder="Rates" />

          <PrimaryBtn
            onPress={() => navigation.navigate("ProfileVerification")}
            text="Continue"
            containerStyle={{ marginVertical: 20 }}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ProviderProfileCreateScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#F4F5F7",
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 10,
    height: 55,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
  },
  cameraBtn: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignSelf: "center",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  imgView: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  img: {
    resizeMode: "contain",
    height: 105,
    width: 105,
    borderRadius: 135,
    right: 1,
  },
});
