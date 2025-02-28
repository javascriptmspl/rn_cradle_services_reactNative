import React from 'react';
import { AddStackParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddServiceScreen from '../screens/AddServiceScreen';
const Stack = createNativeStackNavigator<AddStackParams>();

const AddStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AddService" component={AddServiceScreen} />
    </Stack.Navigator>
  );
};

export default AddStack;
