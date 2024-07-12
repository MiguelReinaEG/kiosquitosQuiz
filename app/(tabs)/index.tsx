import { StyleSheet } from "react-native";

import AnonymousMessage from "@/components/AnonymousMessage";
import UserInfo from "@/components/UserInfo/UserInfo";
import CategoryResume from "@/components/categories/CategoryResume/CategoryResume";
import { useAuthStore } from "@/stores/auth/auth.store";
import { View } from "react-native";

export default function TabOneScreen() {
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  return (
    <View style={styles.container}>
      {isAnonymous ? (
        <AnonymousMessage />
      ) : (
        <>
          <UserInfo />
          <CategoryResume />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
