import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Modal,
    FlatList
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from "../../components/header";
import AccountPopup from "../../components/accounts/accountPopup";
import AccountInfo from "../../components/accounts/accountCard";

export default function AccountsScreen() {
    const [selectedTab, setSelectedTab] = useState("Real");
    const [showPopup, setShowPopup] = useState(false);

    const renderTab = (label: string) => {
        const isActive = selectedTab === label;
        if (isActive) {
            return (
                <LinearGradient
                    colors={["#4E3368", "#30124D"]}
                    angle={90}
                    style={styles.tabButton}
                >
                    <TouchableOpacity
                        className="w-full py-2 items-center"
                        onPress={() => setSelectedTab(label)}
                    >
                        <Text className="text-white font-medium">{label}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            );
        } else {
            return (
                <TouchableOpacity
                    className="flex-1 py-2 items-center"
                    onPress={() => setSelectedTab(label)}
                >
                    <Text className="text-gray-400 font-medium">{label}</Text>
                </TouchableOpacity>
            );
        }
    };

    return (
        <>
            <View className="flex-1 bg-[#0E0E0E] px-4">
                <Header />
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-white text-xl font-semibold">Accounts Overview</Text>
                    <TouchableOpacity>
                        <Ionicons name="options-outline" size={22} color="white" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row mb-4 border border-gray-700 p-0.5" style={styles.tabOuter}>
                    {renderTab("Real")}
                    {renderTab("Demo")}
                    {renderTab("Archived")}
                </View>

                <View className="flex-row items-center bg-transparent border border-[#FFFFFF40] rounded-full px-3  mb-6">
                    <Ionicons name="search" size={18} color="gray" />
                    <TextInput
                        placeholder="Search account"
                        placeholderTextColor="#888"
                        className="ml-2 flex-1 text-white"
                    />
                </View>

                {(selectedTab === 'Real' || selectedTab === 'Archived') && (
                    <FlatList
                        data={[1, 2, 3, 4]}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={() => (
                            <View className="mb-4">
                                <AccountInfo />
                            </View>
                        )}
                    />
                )}


                {selectedTab === 'Demo' &&

                    <View className="border border-dashed border-[#FFFFFF40] rounded-lg p-8 items-center">
                        <Text className="text-gray-400 text-base mb-2">No Active accounts</Text>
                        <Text className="text-gray-500 text-sm mb-4">Create a new account or unarchive</Text>
                        <TouchableOpacity onPress={() => setShowPopup(true)}>
                            <Text className="text-[#9070D1] font-semibold">+ Create a new account</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>

            <Modal
                visible={showPopup}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowPopup(false)}
            >
                <AccountPopup onClose={() => setShowPopup(false)} />
            </Modal>

        </>
    );
}

const styles = StyleSheet.create({
    tabOuter: {
        borderRadius: 8
    },
    tabButton: {
        borderRadius: 7,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
