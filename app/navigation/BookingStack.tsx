import React from 'react';
import { BookingStackParams, ExploreStackParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/FavoriteScreen';
import BookingScreen from '../screens/BookingScreen';
import CancelBookingScreen from '../screens/CancelBookingScreen';
import CompleteBookingScreeen from '../screens/CompletedBookingScreen';
import CancelledBookingScreen from '../screens/CancelledBookingScreen';
import ViewBookingScreeen from '../screens/ViewBookingScreen.index';
import PaymentScreen from '../screens/PaymentScreen';
import WorkCompleteScreen from '../screens/WorkCompleteScreen';

const Stack = createNativeStackNavigator<BookingStackParams>();

const BookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="CancelBooking" component={CancelBookingScreen} />
      <Stack.Screen name="CompleteBooking" component={CompleteBookingScreeen} />
      <Stack.Screen name="CancelledBooking" component={CancelledBookingScreen} />
      <Stack.Screen name="ViewBooking" component={ViewBookingScreeen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="WorkComplete" component={WorkCompleteScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
