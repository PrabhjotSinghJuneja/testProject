import React from "react";
import { View, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
};

export default WelcomeScreen;