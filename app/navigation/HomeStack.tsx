import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParams} from './types';
import FilterScreen from '../screens/FilterScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';
import ServiceProviderProfileScreen from '../screens/ServiceProviderProfileScreen';
import RecommendedAllScreen from '../screens/RecommendedAllScreen';
import BookingOneScreen from '../screens/BookingProcess1Screen';
import BookingTwoScreen from '../screens/BookingTwoScreen';
import BookingThreeScreen from '../screens/BookingThreeScreen';
import BookingSuccessfullScreen from '../screens/BookingSuccessfullScreen';
import NotificationScreen from '../screens/NotificationScreen';
import BookingScreen from '../screens/BookingScreen';
import UpcomingBookingScreen from '../screens/UpcomingbookingScreen';
import EarningsScreen from '../screens/EarningsScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="SingleCategory" component={SingleCategoryScreen} />
      <Stack.Screen name="RecommendedAll" component={RecommendedAllScreen} />
      <Stack.Screen name="BookingOne" component={BookingOneScreen} />
      <Stack.Screen name="BookingTwo" component={BookingTwoScreen} />
      <Stack.Screen name="BookingThree" component={BookingThreeScreen} />
      <Stack.Screen name="BookingSuccessfull" component={BookingSuccessfullScreen} />
      <Stack.Screen name="UpcomingBooking" component={UpcomingBookingScreen} />
      <Stack.Screen name="ServiceProviderProfile" component={ServiceProviderProfileScreen} />


      <Stack.Screen name="Earnings" component={EarningsScreen} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />

      
    </Stack.Navigator>
  );
};

export default HomeStack;
