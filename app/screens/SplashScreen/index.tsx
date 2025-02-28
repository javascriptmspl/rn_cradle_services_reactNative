import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setIsFirstTime } from "../../redux/feature/app/appSlice";

const SplashScreen = ({ setReady }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     AsyncStorage.getItem("IS_FIRST_TIME")
  //       .then((res) => {
  //         if (res === "false") {
  //           dispatch(setIsFirstTime(false));
  //         }
  //       })
  //       .finally(() => {
  //         setReady(true);
  //       });
  //   }, 3000);
  // }, []);


  React.useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("IS_FIRST_TIME")
        .then((res) => {
          if (res === "false") {
            dispatch(setIsFirstTime(false));
          }
        })
        .finally(() => {
          setReady(true);
        });
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={{height:'100%',width:'100%'}} source={require("../../../assets/images/SplashScreen.png")} />
    </View>
  );
};

export default SplashScreen;
