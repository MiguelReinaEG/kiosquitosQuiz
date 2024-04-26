import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./UserInfo.styles";

import { useAuthStore } from "@/stores/auth/auth.store";

const UserInfo = () => {
  const user = useAuthStore((state) => state.user);
  const { email } = user ?? {};
  const name = email?.split("@")[0] ?? "";
  const uppercaseName = name?.charAt(0)?.toUpperCase() + name?.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hello{`, ${uppercaseName}!`}</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/profile");
        }}
      >
        <FontAwesome name="gear" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
