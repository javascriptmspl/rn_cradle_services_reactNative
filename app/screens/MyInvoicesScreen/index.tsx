import { View, Text } from 'react-native'
import React from 'react'
import MainLayout from '../../components/MainLayout'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParams } from '../../navigation/types';

const MyInvoiceScreen = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
  <MainLayout onBack={navigation.goBack} title='My Invoice'>
      <View>
      <Text>MyInvoiceScreen</Text>
    </View>
  </MainLayout>
  )
}

export default MyInvoiceScreen