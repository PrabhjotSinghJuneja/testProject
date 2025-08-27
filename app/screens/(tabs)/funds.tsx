import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/header";

const i1 = require('../../assets/images/funds/i1.png')
const i2 = require('../../assets/images/funds/i2.png')
const i3 = require('../../assets/images/funds/i3.png')
const i4 = require('../../assets/images/funds/i4.png')

export default function FundsScreen() {
  const cards = [
    {
      title: "Deposit",
      subtitle: "Min Deposit is $10.",
      icon: "cash-outline",
      image: i1
    },
    {
      title: "Withdraw",
      subtitle: "Max withdrawal is $1M.",
      icon: "bank-outline",
      image: i2
    },
    {
      title: "Transfer",
      subtitle: "Funds Limit: Unlimited",
      icon: "swap-horizontal-outline",
      image: i3
    },
    {
      title: "Transactions",
      subtitle: "Recent Transactions",
      icon: "document-text-outline",
      image: i4
    },
  ];

  return (
    <View className="flex-1 bg-[#0E0E0E] px-4 pt-10">
      
      <Header/>

      <Text className="text-[#FFFFFFE5] tracking-wide text-xl mb-4">Funds Overview</Text>

      <View className="flex-row flex-wrap justify-between">
        {cards.map((card, index) => (
          <TouchableOpacity key={index} className="w-[48%] mb-4 bg-black" style={styles.card}>
              <Image source={card.image} className="w-20 h-20 self-end"/>
              <Text className="text-[#FFFFFFE5] font-semibold text-lg">{card.title}</Text>
              <Text className="text-[#FFFFFF80] mt-1 text-xs">{card.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    minHeight: 120,
    justifyContent: "flex-end",
    elevation:5
  },
});