// import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
// import React from 'react';
// import {BigText, RegularText} from '../../components/MyText';
// import PrimaryBtn from '../../components/PrimaryBtn';
// import {useNavigation} from '@react-navigation/native';
// import {TouchableOpacity} from 'react-native';
// import {COLORS} from '../../styles';
// import ImageTwo from '../../../assets/images/svg/OnBoardingTwo.svg';

// const {width} = Dimensions.get('window');

// type Props = {
//   handleSkip: () => void;
//   handleNext: () => void;
// };
// const BoardTwo = ({handleNext, handleSkip}: Props) => {
//   const navigation = useNavigation<any>();
//   return (
//     <View
//       style={{
//         width: width,
//         backgroundColor: 'white',
//         flex: 1,
//       }}>
//       <View
//         style={{
//           width: '100%',
//           height: '50%',
//           marginTop: 25,
//           alignItems: 'center',justifyContent:'flex-end'
//         }}>
//         <ImageTwo width={'90%'} />
//       </View>
//       <BigText style={{textAlign: 'center', marginBottom: 10, marginTop: 80}}>
//         Fresh & Quality
//       </BigText>

//       <RegularText
//         style={{
//           textAlign: 'center',
//           color: 'grey',
//           marginHorizontal: 20,
//           marginBottom: 20,
//         }}>
//        All items have real freshness and are intended for your needs
//       </RegularText>

//     </View>
//   );
// };

// export default BoardTwo;

import { View, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import {
  BigText,
  MediumText,
  RegularText,
  Text25,
} from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import ImageThree from "../../../assets/images/svg/OnBoardingThree.svg";
import PrimaryBtn from "../../components/PrimaryBtn";

const { width } = Dimensions.get("window");
type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardTwo = ({ handleSkip, handleNext }: Props) => {
  return (
    <View
      style={{
        width: width,
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 560,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../../assets/images/Ob2.png")}
        />
      </View>

      <View>
        <Image
          style={{
            height: 550,
            width: "100%",
            resizeMode: "contain",
            marginTop: -150,
            position: "absolute",
          }}
          source={require("../../../assets/images/bg.png")}
        />
        <View style={{ alignItems: "center", marginTop: -60 }}>
          <BigText bold style={{ color: "white" }}>
            Easy Track Order
          </BigText>
          <RegularText
            style={{
              textAlign: "center",
              width: 250,
              marginTop: 20,
              color: "white",
              letterSpacing: 0.5,
            }}
          >
            Reference site about Lorem Ipsum, giving information origins as well
            as a random
          </RegularText>
          <PrimaryBtn
            containerStyle={{
              backgroundColor: "white",
              width: "80%",
              marginTop: 30,
            }}
            textStyle={{ color: "#1CAE81" }}
            text="NEXT"
            onPress={handleNext}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 25,
              gap: 7,
            }}
          >
            <View
              style={{
                width: 13,
                height: 13,
                borderRadius: 20,
                backgroundColor: "lightgray",
              }}
            ></View>
            <View
              style={{
                width: 13,
                height: 13,
                backgroundColor: "orange",
                borderRadius: 20,
              }}
            ></View>
            <View
              style={{
                width: 13,
                height: 13,
                borderRadius: 20,
                backgroundColor: "lightgray",
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BoardTwo;
