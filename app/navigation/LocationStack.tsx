import React from 'react';
import { ChatStackParams, LocationStackParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/ChatScreen/MessageScreen';
import LocationScreen from '../screens/LocationScreen';
const Stack = createNativeStackNavigator<LocationStackParams>();

const LocationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};

export default LocationStack;
