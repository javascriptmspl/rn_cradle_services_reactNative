import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {BigText, RegularText} from '../../components/MyText';
import {COLORS} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/feature/auth/authSlice';

const languages = [
  {
    name: 'Hindi',
  },
  {
    name: 'English',
  },
  {
    name: 'Chinese',
  },
  {
    name: 'Portuguese',
  },
  {
    name: 'Spanish',
  },
  {
    name: 'Arabic',
  },
  {
    name: 'Bulgarian',
  },
  {
    name: 'French',
  },
  {
    name: 'Russian',
  },
];

const LanguageSelectScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({});
  const dispatch = useDispatch();

  const handleVerifyOtp = async () => {
    // if (!true) {
    dispatch(
      setAuth({
        name: "GHOST",
        token: "GHOST_TOKEN",
      })
    );
    // } else {
    //   //@ts-ignore
    //   navigation.navigate('MainTab', {user: null, accessToken: null});
    // }
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout
      skipBtn="Skip"
      onPress={handleVerifyOtp}
      >
      <ScrollView>
        <BigText style={{marginHorizontal: 15, marginVertical: 20}}>
          Hey, Jessica
        </BigText>
        <RegularText
          style={{color: 'gray', marginHorizontal: 15, marginBottom: 25}}>
          Please select your preferred language to facilitate communication.
        </RegularText>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // justifyContent: 'center',
            marginHorizontal:15
          }}>
          {languages.map((item, index) => {
            // @ts-ignore
            const selected = !!selectedLanguage[item?.name];
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  selected
                    ? setSelectedLanguage({
                        ...selectedLanguage,
                        [item?.name]: '',
                      })
                    : setSelectedLanguage({
                        ...selectedLanguage,
                        [item?.name]: item?.name,
                      });
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selected ? 'white' : 'black',
                    padding: 5,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    borderWidth: selected ? 0 : 2,
                    borderColor: 'lightgray',
                    marginVertical: 8,
                    marginRight: 10,
                    backgroundColor: selected ? COLORS.lightBlue : 'transparent',
                  }}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={{marginBottom: 50, marginHorizontal:20}}>
        <PrimaryBtn
          text={'Next'}
          onPress={handleVerifyOtp}
        />
      </View>
    </MainLayout>
  );
};

export default LanguageSelectScreen;
