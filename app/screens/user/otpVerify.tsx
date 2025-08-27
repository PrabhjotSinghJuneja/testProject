import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from "react-native";
import AccountDetails from "../../components/accounts/accountDetails";
import { useNavigation } from "@react-navigation/native";

export default function OtpScreen() {
    const navigation = useNavigation<any>();    
    const [showPopup, setShowPopup] = useState(false);
    return (
        <View className="flex-1 bg-black justify-center items-center px-6">
            <Image
                source={require("../../assets/images/check.png")}
                style={styles.icon}
            />

            <Text className="text-white/60 text-base mt-4 text-center">
                Access granted. Let’s build your edge.
            </Text>

            <View className="absolute bottom-10 w-full px-2">
                <TouchableOpacity
                    className="bg-[#7E59CA] py-4 rounded-lg"
                    onPress={() => setShowPopup(true)}
                >
                    <Text className="text-white text-center font-semibold">
                        Account Details
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="mt-3"
                  onPress={() => navigation.replace("BottomNav")}
                >
                    <Text className="text-white/60 text-center mt-3">Dashboard</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={showPopup}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowPopup(false)}
            >
                <AccountDetails onClose={() => setShowPopup(false)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },
});
