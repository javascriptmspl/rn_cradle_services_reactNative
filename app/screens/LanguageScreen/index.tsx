import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import { COLORS } from "../../styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MediumText, RegularText } from "../../components/MyText";

import English from "../../../assets/icon/svg/UK2.svg";
import Britanica from "../../../assets/icon/svg/Brazil.svg";
import Bengali from "../../../assets/icon/svg/Bangladesh.svg";
import Germany from "../../../assets/icon/svg/Germany.svg";
import Portugal from "../../../assets/icon/svg/Portugal.svg";

const data = [
  { id: 1, title: "English", icon: <English /> },
  { id: 2, title: "Britannica", icon: <Britanica /> },
  { id: 3, title: "Bengali", icon: <Bengali /> },
  { id: 4, title: "German", icon: <Germany /> },
  { id: 5, title: "Portugese", icon: <Portugal /> },
];

const Item = ({
  title,
  onSelect,
  isSelected,
  icon
}: {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
  icon: any;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onSelect}
        style={[
          styles.container2,
          { borderColor: isSelected ? COLORS.primary : "gray" },
        ]}
      >
        {icon}
        <RegularText style={{ flex: 1, marginLeft:10 }}>{title}</RegularText>
        <MaterialIcons
          name={isSelected ? "radio-button-on" : "radio-button-off"}
          size={22}
          color={isSelected ? COLORS.primary : "#BBBBBB"}
        />
      </TouchableOpacity>
    </>
  );
};

const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = React.useState<null | number>(2);
  return (
    <MainLayout title="Language" onBack={navigation.goBack}>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <MediumText bold style={{marginTop:20}}>Select Language</MediumText>
        {data.map((i) => {
          return (
            <Item
              key={i.id}
              onSelect={() => setSelectedId(i.id)}
              title={i.title}
              isSelected={i.id === selectedId}
              icon={i.icon}
            />
          );
        })}
      </View>
    </MainLayout>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    borderWidth:1,
    borderColor:'lightygray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10,
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
});
