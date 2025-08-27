import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ToastAndroid
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = require('../assets/images/accounts/user.png');

export default function Header() {

    const handleCopy = () => {
        ToastAndroid.show("ID copied to clipboard!", ToastAndroid.SHORT);
    };

    return (
        <View className="flex-row justify-between items-center mb-6 mt-6">
            <View className="flex-row items-center">
                <Image
                    source={image}
                    className="w-12 h-12 rounded-full mr-3"
                />
                <View>
                    <View className="flex-row items-center">
                        <Text className="text-white text-lg font-semibold">Zee</Text>
                        <Text className="ml-2 text-xs bg-[#1F1400] text-[#F7DA62] px-2.5 py-1 rounded-full">
                            Unverified
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-gray-400 text-sm">ID: A232121u</Text>
                        <TouchableOpacity className="ms-2" onPress={handleCopy}>
                            <Ionicons name="copy-outline" size={12} color="#7E59CA" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity className="p-3 bg-[#000000] rounded-full">
                <Ionicons name="settings-outline" size={22} color="white" />
            </TouchableOpacity>
        </View>
    );
}