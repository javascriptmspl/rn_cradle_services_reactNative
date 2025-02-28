
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
import { RegularText, TitleText } from "../../components/MyText";
import { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "../../sheets/sheets";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { COLORS } from "../../styles";
import DatePicker from "react-native-date-picker";
import PrimaryBtn from "../../components/PrimaryBtn";
import ImagePickerModal from "../../modals/ImagePickerModal";
import AddBtn from "../../components/AddBtn";


const ImagePlaceholder = ({onImageSelect, image}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return image ? (
    <Image
      source={image}
      style={{
        flex: 1,
        height: 180,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
      }}
    />
  ) : (
    <View
      style={{
        flex: 1,
        height: 180,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isModalOpen && (
        <ImagePickerModal
          onImageSelect={onImageSelect}
          onHide={() => setIsModalOpen(false)}
        />
      )}
      <RegularText style={{color: 'gray', marginBottom: 20}}>
        Upload Image
      </RegularText>
      <AddBtn onPress={() => setIsModalOpen(true)} />
    </View>
  );
};


const ProfileVerificationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [doi, setDoi] = useState<any>("");
  const [doe, setDoe] = useState<any>("");
  const [sex, setSex] = useState("Male");
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [isDatePickerOpenExp, setIsDatePickerOpenExp] = React.useState(false);
  const [selectedImages, setSelectedImages] = useState([
    null,
    null,
  ]);


  const IMG_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";


  return (
    <MainLayout title="Verification" onBack={navigation.goBack}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
       
          <Input2 title="Country" placeholder="America" />

          {/* {ID PROOF} */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>ID Proof</Text>
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

          {/* {} */}
          <Input2 title="ID-Number" placeholder="5323859" />

          {/* {ISSUE DATE} */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>Date of issue</Text>
            <TouchableOpacity
              onPress={() => setIsDatePickerOpen(true)}
              style={styles.container}
            >
              <DatePicker
                modal
                mode="date"
                open={isDatePickerOpen}
                date={doi || new Date()}
                onConfirm={(doi) => {
                  setIsDatePickerOpen(false);
                  setDoi(doi);
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
                {doi ? doi?.toISOString().slice(0, 10) : "DD - MM - YYYY"}
              </Text>
              <AntDesign name="calendar" size={20} color={"gray"} />
            </TouchableOpacity>
          </View>

          {/* {EXPIRYY DATE} */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>Expiry Date</Text>
            <TouchableOpacity
              onPress={() => setIsDatePickerOpenExp(true)}
              style={styles.container}
            >
              <DatePicker
                modal
                mode="date"
                open={isDatePickerOpenExp}
                date={doe || new Date()}
                onConfirm={(doe) => {
                  setIsDatePickerOpen(false);
                  setDoe(doe);
                }}
                onCancel={() => {
                  setIsDatePickerOpenExp(false);
                }}
              />
              <Text
                style={{
                  color: "rgba(0,0,0,0.4)",
                  fontSize: 16,
                }}
              >
                {doe ? doe?.toISOString().slice(0, 10) : "DD - MM - YYYY"}
              </Text>
              <AntDesign name="calendar" size={20} color={"gray"} />
            </TouchableOpacity>
          </View>

          <Input2 title="Hourly Rates" placeholder="204 hous Street, Los Angles" />

          <RegularText style={{marginTop:20, marginBottom:-5}} bold>Upload File</RegularText>
          <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            gap: 30,
            marginHorizontal: 10,
          }}>
          <ImagePlaceholder
            image={selectedImages[0]}
            onImageSelect={(imageObj: any) => {
              console.log('here', imageObj);
              const newList = [...selectedImages];
              newList[0] = imageObj;
              setSelectedImages(newList);
            }}
          />
          <ImagePlaceholder
            image={selectedImages[1]}
            onImageSelect={(imageObj: any) => {
              const newList = [...selectedImages];
              newList[1] = imageObj;
              setSelectedImages(newList);
            }}
          />
        </View>
          <PrimaryBtn
            onPress={() => navigation.navigate('AccountCreated')}
            text="Continue"
            containerStyle={{ marginVertical: 20 }}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ProfileVerificationScreen;

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
