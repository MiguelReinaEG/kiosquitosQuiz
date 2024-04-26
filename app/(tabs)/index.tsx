import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";

import AnonymousMessage from "@/components/AnonymousMessage";
import UserInfo from "@/components/UserInfo/UserInfo";
import CategoryResume from "@/components/categories/CategoryResume/CategoryResume";
import { useAuthStore } from "@/stores/auth/auth.store";
import { View } from "react-native";

export default function TabOneScreen() {
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />

      {isAnonymous ? (
        <AnonymousMessage />
      ) : (
        <>
          <UserInfo />
          <View
            style={styles.button}
            // onPress={() => {
            //   router.push("/categories");
            // }}
          ></View>
          <CategoryResume />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "center",
    width: "94%",
    color: "#111827",
    borderColor: "#111827",
  },
  buttonLogout: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    marginTop: 24,
    alignSelf: "center",
  },
});
