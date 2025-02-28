import React from "react";
import { COLORS } from "../styles";
import { View, SafeAreaView, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

type Props = {
  children: React.ReactNode;
  title?: string;
  skipBtn?: string;
  onBack?: () => void;
  onPress?: () => void;
  onBackTitle?: string;
};

const MainLayout = ({ children, title, skipBtn, onBack, onPress }: Props) => {
  const extraStyle = {
    // marginVertical: 15,
    marginTop: 0,
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: 15,height:75,width:'100%'
          },
          onBack ? extraStyle : {},
        ]}
      >
        {onBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} color={COLORS.black} />
          </TouchableOpacity>
        )}
        <Text style={{ color: COLORS.black, fontSize: 22, fontWeight: "600" }}>
          {title}
        </Text>

        <AntDesign name="arrowleft" size={25} color={COLORS.white} />
        
      </View>
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
