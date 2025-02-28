import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../styles";
import { ExploreStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { MediumText, TitleText } from "../../components/MyText";
import ListView from "./ListView";
import GridView from "./GridView";

const FavoriteScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ExploreStackParams>>();
  const [view, setView] = useState(1);
  return (
    <MainLayout onBack={navigation.goBack} title="Favorite">
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        {/* {HEADER} */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",paddingBottom:20
          }}
        >
          <MediumText bold>List View</MediumText>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity
              onPress={() => setView(1)}
              style={[
                styles.btn,
                { backgroundColor: view === 1 ? "#FFA26B" : "white" },
              ]}
            >
              <FontAwesome
                name="list-ul"
                size={24}
                color={view === 1 ? "white" : "black"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setView(2)}
              style={[
                styles.btn,
                { backgroundColor: view === 2 ? "#FFA26B" : "white" },
              ]}
            >
              <Fontisto
                name="nav-icon-grid"
                size={20}
                color={view === 2 ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* {END} */}

        {/* {Lists} */}
        {view === 1 ? <ListView /> : <GridView/>}

        {/* {END} */}
      </View>
    </MainLayout>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  btn: {
    height: 45,
    width: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
