import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from "../../components/header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from "react-native-linear-gradient";
import AccountPopup from "../../components/accounts/accountPopup";

const i1 = require('../../assets/images/home/i1.png')
const i2 = require('../../assets/images/home/i2.png')

export default function HomeScreen() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <ScrollView className="flex-1 bg-[#0E0E0E] px-4" showsVerticalScrollIndicator={false}>
            <Header />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {[1, 2, 3].map((item, index) => (
                    <LinearGradient
                        key={index}
                        colors={["#803FE2", "#803fe285"]}
                        style={styles.card}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-[#FFFFFFD9]">Wallet ID: 12832U</Text>
                            <View className="flex-row items-center">
                                <Text className="text-white font-semibold mr-0.5">USD</Text>
                                <Ionicons name="chevron-down" size={12} color="white" />
                            </View>
                        </View>
                        <Text className="text-white text-6xl font-bold mb-2">
                            $00.0
                            <Ionicons name="eye-off-outline" size={16} color="#FFFFFFBF" />
                        </Text>
                        <Text className="text-[#FFFFFFD9] text-sm mt-2 mb-3">Last 24 hours</Text>
                        <Text className="text-[#44EC60] text-lg">+0.00 (+0%)</Text>
                        <TouchableOpacity className="bg-black py-2.5 px-4 rounded-full self-end absolute bottom-5 right-5">
                            <Text className="text-white text-center">Withdraw</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                ))}
            </ScrollView>

            <Modal
                visible={showPopup}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowPopup(false)}
            >
                <AccountPopup onClose={() => setShowPopup(false)} />
            </Modal>

            <View className="mb-6">
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-white text-xl tracking-wide">Quick Access</Text>
                    <TouchableOpacity>
                        <Text className="text-[#9070D1] underline">Customize &gt;</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-between">
                    {[
                        { name: "Get Funded", icon: "hands-helping" },
                        { name: "Deposits", icon: "money-check" },
                        { name: "Withdrawals", icon: "university" },
                        { name: "Accounts", icon: "wallet" },
                        { name: "Add", icon: "plus" },
                    ].map((item, idx) => (
                        <TouchableOpacity key={idx}>
                            <View className="bg-[#2C1E3980] p-4 rounded-full items-center w-16 h-16">
                                <FontAwesome5 name={item.icon} size={24} color="white" />
                            </View>
                            <Text className="text-white text-xs mt-1 text-center">{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View className="mb-6">
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-white text-xl tracking-wide">Accounts</Text>
                    <TouchableOpacity>
                        <Text className="text-[#9070D1] underline">Create a new account &gt;</Text>
                    </TouchableOpacity>
                </View>
                <View className="border border-dashed border-[#FFFFFF40] rounded-lg p-8 mb-4">
                    <Text className="text-gray-500 text-center">No Active accounts</Text>
                    <Text className="text-gray-500 text-center text-sm mt-1">
                        Create a new account or unarchive
                    </Text>
                </View>

                <View className="flex-row justify-between gap-2">
                    <TouchableOpacity style={styles.tabButton} onPress={() => setShowPopup(true)}>
                        <LinearGradient
                            colors={["#4E3368", "#30124D"]}
                            angle={90}
                            style={styles.tabButton}
                        >
                            <View className="p-3 mr-6">
                                <Text className="text-[#FFFFFF80] text-xs mb-1">*For Pro Traders</Text>
                                <Text className="text-white text-lg">Create a new</Text>
                                <Text className="text-white font-semibold text-lg mb-1">Live account</Text>
                                <Text className="text-[#FFFFFFA6] text-xs">Deposit and trade profits</Text>
                            </View>
                            <Image source={i1} style={styles.imgIcon} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton} onPress={() => setShowPopup(true)}>
                        <LinearGradient
                            colors={["#30124D", "#4E3368"]}
                            angle={90}
                            style={styles.tabButton}
                        >
                            <View className="p-4 mr-6">
                                <Text className="text-[#FFFFFF80] text-xs mb-1">*For Beginners</Text>
                                <Text className="text-white text-lg">Start</Text>
                                <Text className="text-white text-lg ">with
                                    <Text className="text-white font-semibold text-lg mb-1"> Demo</Text></Text>
                                <Text className="text-[#FFFFFFA6] text-xs">Trade with virtual capital</Text>
                            </View>
                            <Image source={i2} style={styles.imgIcon} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        gap: 10
    },
    card: {
        flex: 1,
        borderRadius: 15,
        padding: 25,
        marginBottom: 15,
        width: 300,
        height: 180,
    },
    tabButton: {
        borderRadius: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        position: "relative"
    },
    imgIcon: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 65,
        height: 65
    }
});