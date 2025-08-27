import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AccountDetails({ onClose }: any) {
    const navigation = useNavigation<any>()
    const credentials = [
        { label: "MT5 Login", value: "e12231A" },
        { label: "Password", value: "!23dwdwax@" },
        { label: "Server Name", value: "!23dwdwax@" },
        { label: "Account ID", value: "Q21387313e" },
        { label: "Trading Platform", value: "MT5" },
    ];

    return (
        <View className="flex-1 bg-[#0E0E0E] px-6 pt-12">
            <TouchableOpacity
                className="absolute left-6 top-10 z-[10]"
                onPress={() => onClose()}
            >
                <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                showsVerticalScrollIndicator={false}
            >
                <View className="items-center">
                    <Image
                        source={require("../../assets/images/accounts/mt5.png")}
                        style={styles.icon}
                    />
                    <Text className="text-white/50 text-base text-sm mt-4 text-center">
                        Login these credentials in MT5 Platform
                    </Text>
                </View>

                <View className="bg-black rounded-2xl p-4 mt-8">
                    {credentials.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text className="text-white/50 flex-1">{item.label}</Text>
                            <View className="flex-row items-center">
                                <Text className="text-white/75 mr-2">{item.value}</Text>
                                <Ionicons name="copy-outline" size={14} color="#FFFFFFBF" />
                            </View>
                        </View>
                    ))}
                </View>

                <View className="items-center mt-20">
                    <View className="flex-row items-center mb-4 px-4">
                        <Ionicons name="information-circle-outline" size={14} color="#7E59CA" />
                        <Text className="text-white/55  text-center text-xs ml-2">
                            To activate your account, you must deposit upto $100.
                        </Text>
                    </View>

                    <TouchableOpacity
                        className="bg-[#7E59CA] py-4 mt-2 rounded-lg w-full"
                        onPress={() => {onClose(); navigation.navigate("BottomNav")}}
                    >
                        <Text className="text-white text-center font-semibold">Deposit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="mt-5"
                        onPress={() => {onClose(); navigation.navigate("BottomNav")}}
                    >
                        <Text className="text-white/50 text-center">Dashboard</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#333",
        paddingVertical: 12,
    },
});