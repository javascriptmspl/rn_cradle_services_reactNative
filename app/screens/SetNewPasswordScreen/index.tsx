import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import Feather from "react-native-vector-icons/Feather";
import { ProfileStackParams, RootStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PrimaryBtn from "../../components/PrimaryBtn";

const SetNewPasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [old, setOld] = useState(false);
  const [newPass, setNewPass] = useState(false);
  return (
    <MainLayout title="Set New Password" onBack={navigation.goBack}>
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
            paddingTop: 40,
          }}
        >
          <View style={styles.container}>
            <TextInput
              secureTextEntry={old ? true : false}
              style={{ flex: 1, fontSize: 16 }}
              placeholder="New Password"
            />
            <Feather
              onPress={() => setOld(!old)}
              name={old ? "eye" : "eye-off"}
              size={22}
              color="gray"
            />
          </View>

          <View style={styles.container}>
            <TextInput
              secureTextEntry={newPass ? true : false}
              style={{ flex: 1, fontSize: 16 }}
              placeholder="Confirm Password"
            />
            <Feather
              onPress={() => setNewPass(!newPass)}
              name={newPass ? "eye" : "eye-off"}
              size={22}
              color="gray"
            />
          </View>

          <PrimaryBtn
            containerStyle={{ marginTop: 40 }}
            text="Save Now"
            onPress={() => navigation.navigate("LoginWithEmail")}
          />
        </View>
      </View>
    </MainLayout>
  );
};
export default SetNewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.05)",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    gap: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 8,
    marginBottom: 10,
  },
});
