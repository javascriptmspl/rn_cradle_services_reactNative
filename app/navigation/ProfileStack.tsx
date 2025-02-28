import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParams } from "./types";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

import HelpOptionsScreen from "../screens/HelpOptionsScreen";
import FaqsScreen from "../screens/FaqsScreen";
import RateUsScreen from "../screens/RateUsScreen";
import HelpSupportScreen from "../screens/HelpSupportScreen";
import LanguageScreen from "../screens/LanguageScreen";
import SettingScreen from "../screens/SettingScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ChatScreen from "../screens/ChatScreen";
import MessageScreen from "../screens/ChatScreen/MessageScreen";
import CountryRegionScreen from "../screens/CountryRegionScreen";
import ApiTestScreen from "../screens/ApiTestScreen";
import FakeChatScreen from "../screens/FakeChatScreen";
import FakeChatListScreen from "../screens/FakeChatListScreen";
import TodoListScreen from "../screens/TodoListScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import TermsConditionScreen from "../screens/TermsConditionScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import CookiePolicyScreen from "../screens/CookiePolicyScreen";
import MyInvoiceScreen from "../screens/MyInvoicesScreen";
import BookingScreen from "../screens/BookingScreen";
import MembershipScreen from "../screens/PremiumMembershipScreen";
import TrackActiveBookingScreen from "../screens/TrackActiveBookingScreen";
import CancelBookingScreen from "../screens/CancelBookingScreen";
import CompleteBookingScreeen from "../screens/CompletedBookingScreen";
import CancelledBookingScreen from "../screens/CancelledBookingScreen";
import ProviderReviewsScreen from "../screens/ProviderReviewScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import ManageAvailabilityScreen from "../screens/ManageAvailabilityScreen";
import ManageServicesScreen from "../screens/ManageServiceScreen";
import EditServiceScreen from "../screens/EditServiceScreem";

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<ProfileStackParams>();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="HelpOptions" component={HelpOptionsScreen} />
      <Stack.Screen name="Faq" component={FaqsScreen} />
      <Stack.Screen name="RateUs" component={RateUsScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="CountryRegion" component={CountryRegionScreen} />
      <Stack.Screen name="ApiTest" component={ApiTestScreen} />
      <Stack.Screen name="FakeChat" component={FakeChatScreen} />
      <Stack.Screen name="FakeChatList" component={FakeChatListScreen} />
      <Stack.Screen name="Todo" component={TodoListScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="TermsCondition" component={TermsConditionScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="CookiePolicy" component={CookiePolicyScreen} />
      <Stack.Screen name="MyInvoice" component={MyInvoiceScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Membership" component={MembershipScreen} />
      <Stack.Screen name="CancelBooking" component={CancelBookingScreen} />
      <Stack.Screen name="CompleteBooking" component={CompleteBookingScreeen} />
      <Stack.Screen name="CancelledBooking" component={CancelledBookingScreen} />
      <Stack.Screen name="ProviderReviews" component={ProviderReviewsScreen} />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      <Stack.Screen name="ManageServices" component={ManageServicesScreen} />
      <Stack.Screen name="ManageAvailability" component={ManageAvailabilityScreen} />
      <Stack.Screen name="EditService" component={EditServiceScreen} />
      <Stack.Screen
        name="TrackActiveBooking"
        component={TrackActiveBookingScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
