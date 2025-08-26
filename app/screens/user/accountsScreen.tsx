import React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function AccountsScreen() {
  return (
    <View className="flex-1 bg-black px-4 pt-12">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            className="w-12 h-12 rounded-full mr-3"
          />
          <View>
            <View className="flex-row items-center">
              <Text className="text-white text-lg font-semibold">Zee</Text>
              <Text className="ml-2 text-xs bg-yellow-700 text-white px-2 py-0.5 rounded-full">
                Unverified
              </Text>
            </View>
            <Text className="text-gray-400 text-sm">ID: A232121u</Text>
          </View>
        </View>

        <TouchableOpacity className="p-2 bg-gray-900 rounded-full">
          <Ionicons name="settings-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Accounts Overview */}
      <Text className="text-white text-xl font-semibold mb-4">Accounts Overview</Text>

      {/* Tabs */}
      <View className="flex-row mb-4">
        <TouchableOpacity className="flex-1 bg-purple-900 py-2 rounded-l-lg items-center">
          <Text className="text-white font-medium">Real</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-gray-900 py-2 items-center">
          <Text className="text-gray-400 font-medium">Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-gray-900 py-2 rounded-r-lg items-center">
          <Text className="text-gray-400 font-medium">Archived</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View className="flex-row items-center bg-gray-900 rounded-lg px-3 py-2 mb-6">
        <Feather name="search" size={18} color="gray" />
        <TextInput
          placeholder="Search account"
          placeholderTextColor="#888"
          className="ml-2 flex-1 text-white"
        />
      </View>

      {/* Empty state */}
      <View className="border border-dashed border-gray-700 rounded-lg p-6 items-center">
        <Text className="text-gray-400 text-base mb-2">No Active accounts</Text>
        <Text className="text-gray-500 text-sm mb-4">Create a new account or unarchive</Text>
        <TouchableOpacity>
          <Text className="text-purple-400 font-semibold">+ Create a new account</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tabs */}
      <View className="absolute bottom-0 left-0 right-0 bg-black flex-row justify-around py-3">
        <TouchableOpacity className="items-center">
          <Feather name="grid" size={22} color="gray" />
          <Text className="text-gray-400 text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Feather name="globe" size={22} color="gray" />
          <Text className="text-gray-400 text-xs">Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <View className="bg-purple-600 p-3 rounded-full -mt-6">
            <Feather name="bar-chart-2" size={22} color="white" />
          </View>
          <Text className="text-purple-400 text-xs mt-1">Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Feather name="credit-card" size={22} color="gray" />
          <Text className="text-gray-400 text-xs">Funds</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}