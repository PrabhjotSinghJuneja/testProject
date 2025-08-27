import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../screens/(tabs)/_layout';
import AccountsScreen from '../screens/(tabs)/accountsScreen';
import FundsScreen from '../screens/(tabs)/funds';
import HomeScreen from '../screens/(tabs)/homeScreen';
import OtpScreen from '../screens/user/otpVerify';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNav" component={BottomNavigation} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tools" component={HomeScreen} />
      <Stack.Screen name="Stats" component={HomeScreen} />
      <Stack.Screen name="Accounts" component={AccountsScreen} />
      <Stack.Screen name="Funds" component={FundsScreen} />
      <Stack.Screen name="otp" component={OtpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;