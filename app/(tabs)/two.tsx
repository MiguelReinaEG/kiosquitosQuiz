import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity } from "react-native";

import AnonymousMessage from "@/components/AnonymousMessage";
import UserInfo from "@/components/UserInfo/UserInfo";
import ExpensesResume from "@/components/expenses/ExpensesResume/ExpensesResume";
import { useAuthStore } from "@/stores/auth/auth.store";
import { View } from "@/components/Themed";

export default function TabTwoScreen() {
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  const lastExpensesNode = (
    <>
      <UserInfo />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/expenses");
        }}
      >
        Add Expenses
      </TouchableOpacity>
      <ExpensesResume />
    </>
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      {isAnonymous ? <AnonymousMessage /> : lastExpensesNode}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
