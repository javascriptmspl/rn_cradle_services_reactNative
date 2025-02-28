import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WishlistScreen from '../screens/WishlistScreen';
import {WishlistStackParams} from './types';
import FavouriteScreen from '../screens/FavouriteScreen';

const Stack = createNativeStackNavigator<WishlistStackParams>();
const WishlistStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

export default WishlistStack;
