import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_KEYS } from "../../utils/helper";
import MainLayout from "../../components/MainLayout";
import DatePicker from "react-native-date-picker";
import {
  RegularTextGray,
  SmallText,
  Text22,
  TitleText,
} from "../../components/MyText";
import Input from "../../components/Input";
import { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "../../sheets/sheets";
import PrimaryBtn from "../../components/PrimaryBtn";

const checkRememberMe = async () => {
  try {
    const res = await AsyncStorage.getItem(LOCAL_KEYS.REMEMBER_ME);
    if (res) {
      return JSON.parse(res);
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
  }
};

const IMAGE_URI = require("../../../assets/images/img1.png");

const EditProfileScreen = () => {
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);

  const dispatch = useDispatch();
  const token = useSelector((s: any) => s.auth.accessToken);
  const { user, accessToken } = useSelector((s: any) => s.auth);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dob, setDob] = useState<any>("");
  const [defaultVal, setDefaultVal] = useState(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const openCamera = async () => {
    await launchCamera(
      {
        mediaType: "photo",
      },
      (response: any) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("Image picker error: ", response.error);
        } else {
          console.log({ response }, "sdfsdfds");
          setProfilePhotoUri(response.assets[0].uri);
        }
      }
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response: any) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("Image picker error: ", response.error);
        } else {
          console.log({ response }, "sdfsdfds");
          setProfilePhotoUri(response.assets[0].uri);
        }
      }
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const closeSheet = async () => {
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  console.log({ profilePhotoUri }, "Photo");

  React.useEffect(() => {
    const init = async () => {
      try {
        const res = await checkRememberMe();
        if (!res) return;
        setDefaultVal(res);
      } catch (error) {
        console.log(error);
      }
    };
    const init2 = async () => {
      await AsyncStorage.setItem(
        LOCAL_KEYS.IS_FIRST_TIME_OPEN,
        JSON.stringify(false)
      );
      console.log("IS FIRST TIME SET TO FALSE");
    };
    init();
    init2();
  }, []);

  return (
    <MainLayout onBack={navigation.goBack} title="Profile">
      <ScrollView
        style={{ flex: 1, marginHorizontal: 15 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.imgView}>
            {profilePhotoUri ? (
              <Image style={styles.img} source={{ uri: profilePhotoUri }} />
            ) : (
              <Image style={styles.img} source={IMAGE_URI} />
            )}
          </View>
          <View style={styles.cameraBtn}>
            <MaterialIcons
              onPress={() => {
                SheetManager.show(SHEETS.CameraAndGalleryOption, {
                  //@ts-ignore
                  payload: { openCamera, openGallery, closeSheet },
                });
              }}
              name="add"
              size={22}
              color={COLORS.white}
            />
          </View>
        </View>
        {/* <Text22 bold style={{ textAlign: "center" }}>John Smith</Text22> */}
        {/* <Text22 style={{ textAlign: "center" }}>Account Credit: $200.00</Text22> */}

        {/* {END} */}
        <View style={{ marginBottom: 15 }}>
          <Input placeholder="John Smith" />
          <Input placeholder="+880 000 111 333" />
          <Input placeholder="youremail@website.com" />
          <Input placeholder="Iris Watson PO Box, 283828" />

          <PrimaryBtn
            containerStyle={{ marginVertical: 20 }}
            onPress={() => navigation.goBack()}
            text="Save Now"
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  imgView: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 135,
    right: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    borderWidth: 2,
    borderColor: "lightgray",
    justifyContent: "space-between",
    paddingHorizontal: 11,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  cameraBtn: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignSelf: "center",
    bottom: 35,
    left: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
