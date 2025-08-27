import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import HomeScreen from "./homeScreen";
import AccountsScreen from "./accountsScreen";
import FundsScreen from "./funds";

const Tab = createBottomTabNavigator<any>();

const BottomNavigation: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const tabs = [
    { key: "Home", icon: "th-large" },
    { key: "Tools", icon: "globe" },
    { key: "Stats", icon: "" },
    { key: "Accounts", icon: "wallet" },
    { key: "Funds", icon: "money-check" },
  ];
  return (
    <View style={styles.container}>
      <View className="rounded-full bg-black p-3 mx-2 relative">
        <TouchableOpacity
          className="flex items-center justify-center"
          onPress={() => navigation.navigate('Stats')}
          style={styles.middleTab}
        >
          <View style={styles.middleInner}>
          <FontAwesome5
            name={'chart-line'}
            size={24}
            color={'#ffffff'}
          />
          </View>
        </TouchableOpacity>
        <View className="flex-row items-center justify-between px-5 relative">
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const tab = tabs[index];

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                className="flex items-center justify-center"
                onPress={onPress}
                style={[isFocused ? styles.tab : null]}
              >

                <FontAwesome5
                  name={tab.icon}
                  size={18}
                  color={
                    isFocused
                      ? index === 2
                        ? "#ffffff"
                        : "#fff"
                      : "#FFFFFF40"
                  }
                />
                {index !== 2 && (
                  <Text
                    className={`text-xs mt-1 ${isFocused ? "text-white" : "text-white/25"
                      }`}
                  >
                    {tab.key}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const AppTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavigation {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tools" component={HomeScreen} />
      <Tab.Screen name="Stats" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Funds" component={FundsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E0E0E",
    paddingVertical: 10,
    bottom: 0,
    width: "100%",
    height:90
  },
  middleTab: {
    backgroundColor: "#000000",
    width: 60,
    height: 60,
    position: "absolute",
    zIndex: 10,
    top: -25,
    left: "50%",
    transform: [{ translateX: -22.5 }],
    borderRadius: 200 / 2,
    justifyContent: "center",
    alignItems: "center",
    padding:5
  },
  middleInner: {
    backgroundColor: "#803FE2",
    width: 50,
    height: 50,
    borderRadius: 200 / 2,
    justifyContent: "center",
    alignItems: "center",
    padding:5
  },
  tab: {
    borderBottomColor: "#803FE2",
    borderBottomWidth: 2
  },
});

export default AppTabs;