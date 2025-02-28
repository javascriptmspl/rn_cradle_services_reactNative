import { View, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RegularText } from "../../components/MyText";


const ChangePasswordScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
    const [old, setOld] = useState(false);
    const [newPass, setNewPass] = useState(false);
    const [confirm, setConfirm] = useState(false);
    return (
        <MainLayout title="Change Password" onBack={navigation.goBack}>
            <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>

                <RegularText>Old Password</RegularText>
                <View style={styles.container}> 
                <SimpleLineIcons name="lock" size={20} color="gray" />
                <TextInput secureTextEntry={old ? true : false}  style={{flex:1}} placeholder="********"/>
                <Feather onPress={()=>setOld(!old)} name={old ?  'eye' : "eye-off"} size={22} color="gray" />
                </View>

                <RegularText>New Password</RegularText>
                <View style={styles.container}> 
                <SimpleLineIcons name="lock" size={20} color="gray" />
                <TextInput secureTextEntry={newPass ? true : false}  style={{flex:1}} placeholder="********"/>
                <Feather onPress={()=>setNewPass(!newPass)} name={newPass ?  'eye' : "eye-off"} size={22} color="gray" />
                </View>

                <RegularText>Confirm Password</RegularText>
                <View style={styles.container}> 
                <SimpleLineIcons name="lock" size={20} color="gray" />
                <TextInput secureTextEntry={confirm ? true : false}  style={{flex:1}} placeholder="********"/>
                <Feather onPress={()=>setConfirm(!confirm)} name={confirm ?  'eye' : "eye-off"} size={22} color="gray" />
                </View>

            </View>
        </MainLayout>
    );
};
export default ChangePasswordScreen;


const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'rgba(0,0,0,0.05)',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            gap: 10,paddingHorizontal:10, borderRadius:10, marginTop:8, marginBottom:20
        }
    }
)