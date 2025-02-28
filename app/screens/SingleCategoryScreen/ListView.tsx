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
import AntDesign from "react-native-vector-icons/AntDesign";
import { ExploreStackParams } from "../../navigation/types";
import { RegularText, SmallText, SmallText10 } from "../../components/MyText";

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

const Item = ({name, skill, price, img}:any)=>{
  const navigation =
  useNavigation<NativeStackNavigationProp<ExploreStackParams>>();
  const [like, setLike] = useState(false);
  return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.imgView}
    onPress={() => navigation.navigate('ServiceProviderProfile')}
    >
      <Image
        style={{ height: "100%", width: "100%", borderRadius: 100 }}
        source={img}
      />
    </TouchableOpacity>
    <View style={{ flex: 1 }}>
      {/* {NAME} */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RegularText bold>{name}</RegularText>
        <AntDesign onPress={()=>setLike(!like)}
        name={like ? "heart" : "hearto"}
        size={20}
        color="red"
      />
      </View>
      {/* {LOCATION} */}

      <SmallText bold>Cleaner</SmallText>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <AntDesign name="star" size={12} color="#FFC107" />
            <AntDesign name="star" size={12} color="#FFC107" />
            <AntDesign name="star" size={12} color="#FFC107" />
            <AntDesign name="star" size={12} color="#FFC107" />
            <AntDesign name="star" size={12} color="lightgray" />
            <SmallText10 bold>320</SmallText10>
          </View>
          <SmallText bold style={{ color: 'red' }}>
            ${price}
          </SmallText>
        </View>
      </View>

      {/* {END} */}
    </View>
  </View>
  )
}

const ListView = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ExploreStackParams>>();
  return (
    <View>
      <FlatList contentContainerStyle={{paddingBottom:90}}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => {
          return (
           <Item img={item.img} name={item.name} skill={item.skill} price={item.price}/>
          );
        }}
      />
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 1,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    marginHorizontal: 2,
    borderRadius: 15,
  },
  imgView: {
    height: 80,
    width: 80,
    backgroundColor: "lightgray",
    borderRadius: 80,
  },

});
