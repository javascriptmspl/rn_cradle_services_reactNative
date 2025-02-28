import {
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { TouchableOpacity } from "react-native";
import { MediumText, RegularText, RegularTextGray, SmallText } from "../../components/MyText";

const data = [
  {
    text: 'Sarah Williams has sent you an invitation to Connect',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhUml1ZDbxhB9LtKn1jr0XSQ6qcwctUuQKg&s'
  },
  {
    text: 'Handful of model sentence structures, to generate',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfpXNxehmut80NktHkyZYpFDr9BdgkhBnmg&s'
  },
  {
    text: 'Sed ut perspiciatis unde omnis iste natus error',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5H4jCmhH0BOHclWDTve-sPALU046j182Mg&s'
  },
  {
    text: 'Sarah Williams has sent you an invitation to Connect',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJLLj4Fk2KIeTOHNxdGLcUv34T0qVg3jUXg&s'
  },
  {
    text: 'Handful of model sentence structures, to generate',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfMuu--T9J_ajuPdO6BhbQRCPcIMJITx0Zg&s'
  },
  {
    text: 'How all this mistaken idea of denouncing pleasure',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXsacO_YYr2BH1nDb2nCd1cbqrB1yKVMY_Q&s'
  },
  
]
const NotificationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Notification">
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ marginTop: 20 }}></View>
        <RegularTextGray>Yesterday</RegularTextGray>
        <View style={{ marginTop: 20 }}></View>

        {/* {ACCOUNT SETTINGS} */}
        <FlatList showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }: any) => {
            return (
              <TouchableOpacity style={styles.row}>
                <View style={styles.circle}>
                  <Image
                    style={{ height: 50, width: 50, borderRadius: 40 }}
                    source={{ uri: item.img }}
                  />
                </View>
                <View style={{ gap: 10, flex: 1 }}>
                  <RegularText style={{ paddingRight: 5, marginRight: 20 }}>
                    {item.text}
                  </RegularText>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    {/* <MaterialIcons name="access-time" size={20} color="gray" /> */}

                    <SmallText>05:50 PM</SmallText>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    // borderBottomColor: 'black',
    borderBottomColor: "rgba(0,0,0,0.06)",
    paddingBottom: 10,
    marginBottom: 20,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ED588D",
  },
});
