import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import AntDesign from "react-native-vector-icons/AntDesign";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  import {
    MediumText,
    SmallText,
    SmallText10,
    SmallText10B,
    SmallTextB,
  } from "../../components/MyText";
  import { useNavigation } from "@react-navigation/native";
  import { COLORS } from "../../styles";
  import Reviews from "./Reviews";
import Details from "./Details";


const  IMAGE =  "https://www.hospitalitynet.org/picture/xxl_153162036.jpg?t=1698134896"
  
  const TrendingDestinationScreen = () => {
    const navigation = useNavigation();
    const [details, setDetails] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [isLike, setIsLike] = useState(false);
   
    return (
      <ScrollView scrollEnabled>
        {/* {IMAGE VIEW} */}
        <View
          style={{
            height: 400,
            // backgroundColor: "red",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Image
            style={{
              position: "absolute",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              height: "100%",
              width: "100%",
            }}
            source={{uri:IMAGE}}
          />
  
          <View style={{ height: "100%", width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.btn}
              >
                <AntDesign
                  name="arrowleft"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
              <View style={[styles.btn, { borderRadius: 40 }]}>
                <AntDesign
                onPress={() => setIsLike(!isLike)}
                name={isLike ? "heart" : "hearto"} size={20} color={isLike ? "red" : "white"} />
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <View style={styles.detailsText}>
                <View>
                  <MediumText bold style={{ color: "white" }}>
                    Diamond Beech
                  </MediumText>
                  <View
                    style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                  >
                    <MaterialIcons name="location-on" size={20} color="red" />
                    <SmallText10 style={{color:'white'}}>Nordegg, Canada</SmallText10>
                  </View>
                </View>
                <View>
                  <SmallText bold style={{ color: "white" }}>
                    $1200
                  </SmallText>
                  <SmallText10 style={{color:'white'}}>/person</SmallText10>
                </View>
              </View>
            </View>
          </View>
        </View>
  
        {/* {DOWN VIEW} */}
        <View style={{ marginHorizontal: 15 }}>
          {/* {TIME RATINGS} */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <View style={styles.timeRatingBtn}>
                <AntDesign name="clockcircleo" size={20} color={COLORS.primary} />
              </View>
              <View>
                <SmallText10>Time Duration</SmallText10>
                <SmallTextB bold>5 day</SmallTextB>
              </View>
            </View>
            {/* {dsfsdfads} */}
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <View style={[styles.timeRatingBtn]}>
                <AntDesign name="star" size={20} color={COLORS.primary} />
              </View>
              <View>
                <SmallText10>Ratings</SmallText10>
                <SmallTextB bold>4.7</SmallTextB>
              </View>
            </View>
          </View>
          {/* {BTNS} */}
          <View style={{ flexDirection: "row", gap: 5, marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                setDetails(true), setReviews(false);
              }}
              style={[
                styles.changeBtn,
                {
                  backgroundColor: details ? COLORS.primary : "rgba(0,0,0,0.05)",
                },
              ]}
            >
              <SmallText10B style={{ color: details ? "white" : "black" }} bold>
                Details
              </SmallText10B>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDetails(false), setReviews(true);
              }}
              style={[
                styles.changeBtn,
                {
                  backgroundColor: reviews ? COLORS.primary : "rgba(0,0,0,0.05)",
                },
              ]}
            >
              <SmallText10B style={{ color: reviews ? "white" : "black" }} bold>
                Review
              </SmallText10B>
            </TouchableOpacity>
          </View>
          {/* { DETAILS REVIEW} */}
          {details && <Details />}
          {reviews && <Reviews />}
          {/* {} */}
        </View>
      </ScrollView>
    );
  };
  
  export default TrendingDestinationScreen;
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: "rgba(0,0,0,0.4)",
      height: 40,
      width: 40,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    detailsText: {
      backgroundColor: "rgba(0,0,0,0.4)",
      height: 90,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    timeRatingBtn: {
      height: 50,
      width: 50,
      borderRadius: 10,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    changeBtn: {
      width: 70,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      backgroundColor: COLORS.primary,
    },
  });
  