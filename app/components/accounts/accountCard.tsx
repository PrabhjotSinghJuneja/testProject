import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AccountInfo = () => {

  return (
    <View className="bg-black p-4 rounded-xl">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Text className="text-white/90 text-xl font-bold">$00.0</Text>
          <Text className="text-white/50 text-xs ml-2 font-bold">PnL</Text>
          <Text className="text-green-400 text-sm ml-1">
            +0.00 (+0%)
          </Text>
        </View>

        <View className="flex-row items-center">
              <Ionicons name="cellular" size={14} color="#9070D1" />
          <Text className="text-[#9070D1] text-sm font-600 ms-1">Trade Now</Text>
        </View>
      </View>

      <View className="h-[1px] bg-neutral-800 my-3" />

      <View className="space-y-5 gap-1.5">
        <View className="flex-row justify-between items-center">
          <Text className="text-white/50">Account ID</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-white/75 me-2">Q21387313e</Text>
            <TouchableOpacity>
              <Ionicons name="copy-outline" size={14} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-white/50">Equity</Text>
          <Text className="text-white/75">$00.0</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-white/50">Leverage</Text>
          <Text className="text-white/75">1:10</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountInfo;