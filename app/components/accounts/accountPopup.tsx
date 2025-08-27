import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Switch, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const i1 = require('../../assets/images/home/i1.png')
const i2 = require('../../assets/images/home/i2.png')
const logo = require('../../assets/images/logo.png')

export default function AccountPopup({ onClose }: any) {
    const navigation = useNavigation<any>();
    const [step, setStep] = useState(0);
    const [platform, setPlatform] = useState("MetaTrader 5");
    const [selectedAccount, setSelectedAccount] = useState(1);
    const [selectedTab, setSelectedTab] = useState("Live Account");
    const [leverage, setLeverage] = useState("1:10");

    const accounts = [
        { id: 0, spread: "0.2", commission: "2%", deposit: "$10" },
        { id: 1, spread: "0.2", commission: "2%", deposit: "$100", recommended: true },
        { id: 2, spread: "0.2", commission: "2%", deposit: "$500" },
    ];

    const renderTab = (label: string) => {
        const isActive = selectedTab === label;
        if (isActive) {
            return (
                <LinearGradient
                    colors={["#4E3368", "#30124D"]}
                    angle={90}
                    style={styles.tabButton2}
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

    const renderTab2 = (label: string) => {
        const isActive = platform === label;
        if (isActive) {
            return (
                <LinearGradient
                    colors={["#4E3368", "#30124D"]}
                    angle={90}
                    style={styles.tabButton2}
                >
                    <TouchableOpacity
                        className="w-full py-2 items-center"
                        onPress={() => setPlatform(label)}
                    >
                        <Text className="text-white font-medium">{label}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            );
        } else {
            return (
                <TouchableOpacity
                    className="flex-1 py-2 items-center"
                    onPress={() => setPlatform(label)}
                >
                    <Text className="text-gray-400 font-medium">{label}</Text>
                </TouchableOpacity>
            );
        }
    };

    const renderTab3 = (label: string) => {
        const isActive = leverage === label;
        if (isActive) {
            return (
                <LinearGradient
                    colors={["#4E3368", "#30124D"]}
                    angle={90}
                    style={styles.tabButton2}
                >
                    <TouchableOpacity
                        className="w-full py-2 items-center"
                        onPress={() => setLeverage(label)}
                    >
                        <Text className="text-white font-medium">{label}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            );
        } else {
            return (
                <TouchableOpacity
                    className="flex-1 py-2 items-center"
                    onPress={() => setLeverage(label)}
                >
                    <Text className="text-gray-400 font-medium">{label}</Text>
                </TouchableOpacity>
            );
        }
    };

    const [accountName, setAccountName] = useState("Standard");
    const [ibId, setIbId] = useState(false);

    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [currencyValue, setCurrencyValue] = useState("USD");
    const [currencyItems, setCurrencyItems] = useState([
        { label: "USD", value: "USD" },
        { label: "EUR", value: "EUR" },
        { label: "GBP", value: "GBP" },
    ]);

    const [accountTypeOpen, setAccountTypeOpen] = useState(false);
    const [accountTypeValue, setAccountTypeValue] = useState(null);
    const [accountTypeItems, setAccountTypeItems] = useState([
        { label: "Standard", value: "Standard" },
        { label: "Pro", value: "Pro" },
        { label: "VIP", value: "VIP" },
    ]);


    return (
        <View className="flex-1 justify-end bg-[#0E0E0ED9] bg-opacity-50">
            <View style={styles.popup}>
                {step === 0 &&
                    <>
                        <TouchableOpacity className="absolute top-5 right-5 z-[10]" onPress={onClose}>
                            <Ionicons name="close" size={30} color="gray" />
                        </TouchableOpacity>

                        <Text className="text-white text-lg font-semibold mb-2">
                            Your trading journey is 2 steps away...
                        </Text>
                        <Text className="text-gray-400 mb-5">
                            Choose your trade account type
                        </Text>

                        <View className="flex-row justify-between gap-2">
                            <TouchableOpacity style={styles.tabButton} onPress={() => setStep(1)}>
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
                            <TouchableOpacity style={styles.tabButton} onPress={() => setStep(1)}>
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
                    </>
                }

                {step == 1 &&
                    <>
                        < View className="flex-row items-center mb-6">
                            <TouchableOpacity onPress={() => setStep(0)}>
                                <Ionicons name="arrow-back" size={22} color="#FFFFFF73" />
                            </TouchableOpacity>
                            <Text className="text-white text-lg ml-[85]">Create Account</Text>
                        </View>

                        <Text className="text-[#FFFFFF73] mb-2">ACCOUNT TYPE</Text>
                        <View className="flex-row mb-4 border border-gray-700 p-0.5" style={styles.tabOuter}>
                            {renderTab("Live Account")}
                            {renderTab("Demo Account")}
                        </View>

                        <Text className="text-[#FFFFFF73] mb-2">PLATFORM</Text>
                        <View className="flex-row mb-4 border border-gray-700 p-0.5" style={styles.tabOuter}>
                            {renderTab2("MetaTrader 4")}
                            {renderTab2("MetaTrader 5")}
                        </View>

                        <Text className="text-[#FFFFFF] text-xl mb-4">Choose Account</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {accounts.map((acc) => (
                                <TouchableOpacity
                                    key={acc.id}
                                    className={`w-40 rounded-2xl mx-2 p-[1px]`}
                                    onPress={() => setSelectedAccount(acc.id)}
                                >
                                    <LinearGradient
                                        colors={
                                            selectedAccount === acc.id
                                                ? ["#A282F3", "#6B3DC8"]
                                                : ["#1C1C1E", "#1C1C1E"]
                                        }
                                        style={styles.card}
                                    >
                                        {acc.recommended && (
                                            <Text className="text-white self-center mt-2">Recommended</Text>
                                        )}
                                        <View className="py-4 m-2  bg-[#0D050E]" style={styles.card}>
                                            <Text className="text-[#FFFFFF80] self-center text-xs mb-8">*For Traditional Traders</Text>
                                            <View className="flex-row justify-between px-2">
                                                <Text className="text-[#FFFFFF80] text-sm">Spread pips:</Text>
                                                <Text className="text-[#FFFFFFBF]">{acc.spread}</Text>
                                            </View>

                                            <View className="flex-row justify-between px-2">
                                                <Text className="text-[#FFFFFF80] text-sm">Commissions:</Text>
                                                <Text className="text-[#FFFFFFBF]">{acc.commission}</Text>
                                            </View>

                                            <View className="border-t border-[#FFFFFF40] mt-3 pt-3 flex-row justify-between  px-2">
                                                <Text className="text-[#FFFFFF80] text-sm">Min Deposit</Text>
                                                <Text className="text-[#FFFFFF]">{acc.deposit}</Text>
                                            </View>

                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        <TouchableOpacity className="mt-10 rounded-lg py-3 items-center bg-[#7E59CA]" style={styles.tabOuter} onPress={() => setStep(2)}>
                            <Text className="text-white text-lg">Next</Text>
                        </TouchableOpacity>
                    </>
                }

                {step == 2 &&
                    <>
                        < View className="flex-row items-center mb-6">
                            <TouchableOpacity onPress={() => setStep(step - 1)}>
                                <Ionicons name="arrow-back" size={22} color="#FFFFFF73" />
                            </TouchableOpacity>
                            <Text className="text-white text-lg ml-[85]">Create Account</Text>
                        </View>

                        <Text className="text-white text-base mb-3">Account Settings</Text>

                        <Text className="text-[#FFFFFF73] tracking-wide text-sm mb-2">LEVERAGE</Text>
                        <View className="flex-row mb-4 border border-gray-700 p-0.5" style={styles.tabOuter}>
                            {renderTab3("1:10")}
                            {renderTab3("1:20")}
                            {renderTab3("1:50")}
                            {renderTab3("1:100")}
                            {renderTab3("1:500")}
                        </View>

                        <Text className="text-[#FFFFFF73] tracking-wide text-sm mb-2">CURRENCY</Text>
                        <DropDownPicker
                            open={currencyOpen}
                            value={currencyValue}
                            items={currencyItems}
                            setOpen={setCurrencyOpen}
                            setValue={setCurrencyValue}
                            setItems={setCurrencyItems}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            textStyle={{ color: "#FFFFFFBF" }}
                            placeholder="Select Currency"
                        />

                        <Text className="text-[#FFFFFF73] tracking-wide text-sm mb-2 mt-4">CHOOSE ACCOUNT NAME</Text>
                        <TextInput
                            value={accountName}
                            onChangeText={setAccountName}
                            className="bg-[#1E1E1E] text-[#FFFFFFBF] rounded-xl p-5 mb-5"
                            placeholder="Enter account name"
                            placeholderTextColor="#666"
                        />

                        <Text className="text-[#FFFFFF73] tracking-wide text-sm mb-2">ACCOUNT TYPE</Text>
                        <DropDownPicker
                            open={accountTypeOpen}
                            value={accountTypeValue}
                            items={accountTypeItems}
                            setOpen={setAccountTypeOpen}
                            setValue={setAccountTypeValue}
                            setItems={setAccountTypeItems}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            textStyle={{ color: "#FFFFFFBF" }}
                            placeholder="Select Account Type"
                            listMode="MODAL"
                        />

                        <View className="flex-row items-center justify-between mt-6">
                            <Text className="text-white text-sm">IB ID (Optional)</Text>
                            <Switch
                                value={ibId}
                                onValueChange={setIbId}
                                thumbColor={ibId ? "#803FE2" : "#fff"}
                                trackColor={{ true: "#803FE299", false: "#444" }}
                            />
                        </View>

                        <TouchableOpacity className="mt-10 rounded-lg py-3 items-center bg-[#7E59CA]" style={styles.tabOuter} onPress={() => setStep(3)}>
                            <Text className="text-white text-lg">Next</Text>
                        </TouchableOpacity>
                    </>
                }

                {step == 3 &&
                    <>
                        <View className="items-center mb-6">
                            <Image
                                source={logo}
                                style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                            />
                        </View>

                        {[
                            { label: "Trading Platform", value: "MT5" },
                            { label: "Account Type", value: "Standard" },
                            { label: "Leverage", value: "1:10" },
                            { label: "Currency", value: "USD" },
                            { label: "Password", value: "********" },
                        ].map((item, idx) => (
                            <View
                                key={idx}
                                className="flex-row justify-between items-center py-3 "
                            >
                                <Text className="text-white/50 text-base">{item.label}</Text>
                                <Text className="text-white/70 text-base font-medium">{item.value}<Ionicons name="chevron-forward" className='mt-5' size={14} color="#FFFFFFBF" /></Text>
                            </View>
                        ))}

                        <View className="mt-8">
                            <TouchableOpacity
                                className="bg-[#8B5CF6] py-3 rounded-xl mb-3"
                                onPress={() => { onClose(); navigation.navigate('otp') }}
                            >
                                <Text className="text-white text-center text-lg font-semibold">
                                    Confirm
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => onClose()}>
                                <Text className="text-white/50 text-center text-base">Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#121212",
    },
    popup: {
        backgroundColor: '#000000',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabButton: {
        borderRadius: 15,
        flex: 1,
        elevation: 5,
        position: "relative",
        minHeight: 100,
    },
    imgIcon: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 65,
        height: 65
    },
    card: {
        borderRadius: 16,
        justifyContent: "center",
    },
    tabOuter: {
        borderRadius: 8
    },
    tabButton2: {
        borderRadius: 7,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 40,
    },
    dropdown: {
        backgroundColor: "#1E1E1E",
        borderColor: "#1E1E1E",
        borderRadius: 10,
        position: "relative"
    },
    dropdownContainer: {
        backgroundColor: "#1E1E1E",
        borderColor: "#1E1E1E",
        zIndex: 9999,
    },
});