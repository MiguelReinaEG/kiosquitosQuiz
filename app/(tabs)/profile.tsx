import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { supabase } from "../supabase";

import AnonymousMessage from "@/components/AnonymousMessage";
import { Text, View } from "@/components/Themed";
import { useAuthStore } from "@/stores/auth/auth.store";

export default function ProfileScreen() {
  const [loading, setLoading] = useState(false);
  const setIsAnonymous = useAuthStore((state) => state.setIsAnonymous);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const { email } = user ?? {};
  const name = email?.split("@")[0] ?? "";
  const uppercaseName = name?.charAt(0)?.toUpperCase() + name?.slice(1);

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      console.error("Error logging out:", error.message);
      return;
    }
    setUser(undefined);
    setIsAnonymous(true);
  };

  const renderLogoutUserComponent = () => {
    if (isAnonymous) return <AnonymousMessage />;
    return (
      <TouchableOpacity
        style={[styles.button]}
        onPress={handleLogout}
        disabled={loading}
      >
        <Text style={{ color: "#fff" }}>
          {loading ? "loading..." : "Logout"}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <Link href="/terms/">
        <Text
          style={{
            color: "#007AFF",
            fontSize: 16,
            textDecorationLine: "underline",
          }}
        >
          Terms and conditions
        </Text>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {!isAnonymous ? (
        <>
          <Text>Hello{`, ${uppercaseName}!`}</Text>
          <Text style={styles.name}>{email}</Text>
        </>
      ) : null}
      {renderLogoutUserComponent()}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {renderTermsAndConditions()}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 64,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    borderWidth: 4,
    borderColor: "#111827",
  },
  name: {
    marginBottom: 80,
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
