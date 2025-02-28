import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../styles";
import { ExploreStackParams, HomeStackParams } from "../../navigation/types";
import { RegularText, SmallText, SmallText10 } from "../../components/MyText";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const data = [
  {
    name: "John Smith",
    skill: "Electrician",
    price: "78.00/hr",
    img: require("../../../assets/images/img1.png"),
  },
  {
    name: "Dwyane Rock",
    skill: "Electrician",
    price: "35.00/hr",
    img: require("../../../assets/images/img2.png"),
  },
  {
    name: "John Cena",
    skill: "Painter",
    price: "40.00/hr",
    img: require("../../../assets/images/img3.png"),
  },
  {
    name: "Mark Wood",
    skill: "Cleaner",
    price: "69.00/hr",
    img: require("../../../assets/images/img4.png"),
  },
  {
    name: "Andrew Simons",
    skill: "Plumber",
    price: "25.00/hr",
    img: require("../../../assets/images/img5.png"),
  },
  {
    name: "Harry Potter",
    skill: "Maid",
    price: "12.00/hr",
    img: require("../../../assets/images/img6.png"),
  },
];

const Item = ({ name, skill, price, img, index }: any) => {
  const [like, setLike] = useState(false);
  const navigation =
  useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={{ flex: 1 / 2, height: 230, margin: 5, borderRadius: 10 }}>
      {/* {LIKE} */}
      <TouchableOpacity
        onPress={() => setLike(!like)}
        style={{
          position: "absolute",
          backgroundColor: "white",
          height: 25,
          width: 25,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          top: 10,
          right: 10,
        }}
      >
        <AntDesign name={like ? "heart" : "hearto"} size={15} color="red" />
      </TouchableOpacity>
      {/* {} */}
      <View style={{ height: "52%", width: "100%" }}>
        <Image style={styles.img} source={img} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ServiceProviderProfile')}
        style={{
          height: "48%",
          backgroundColor: getRandomColor(),
          width: "100%",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <RegularText bold style={{ color: "white" }}>
          {name}
        </RegularText>
        <SmallText bold style={{ color: "white" }}>
          10 year Experience
        </SmallText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <AntDesign name="star" size={10} color="#FFC107" />
          <SmallText10 bold style={{ color: "white" }}>
            4.9
          </SmallText10>
        </View>
        <SmallText bold style={{ color: "white" }}>
          ${price}
        </SmallText>
      </TouchableOpacity>
    </View>
  );
};

const GridView = () => {
 
  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 90 }}
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }: any) => {
          return (
            <Item
              img={item.img}
              index={index}
              name={item.name}
              skill={item.skill}
              price={item.price}
            />
          );
        }}
      />
    </View>
  );
};

export default GridView;

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
