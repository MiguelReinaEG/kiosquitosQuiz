import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";

import { supabase } from "../../config/supabase";

import AnonymousMessage from "@/components/AnonymousMessage";
import { Text, View } from "@/components/Themed";
import { useAuthStore } from "@/stores/auth/auth.store";
import Ranking from "@/components/Ranking/Ranking";

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
      <Text style={styles.headerTitle}>Profile</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {!isAnonymous ? (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/images/kfc_kq_logo.png")}
            style={styles.imageProfile}
          />

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              top: 20,
              marginLeft: 20,
              marginBottom: 50,
            }}
          >
            <Text style={{ fontFamily: "PoppinsBold", fontSize: 24 }}>
              Hello{`, ${uppercaseName}!`}
            </Text>
            <Text style={styles.name}>{email}</Text>
            <Text style={styles.name}>Ten encuentras en el top 3.</Text>
          </View>
        </View>
      ) : null}

      {renderLogoutUserComponent()}

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Ranking />
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
  image: {
    borderWidth: 4,
    borderColor: "#111827",
  },
  name: {
    color: "#333",
    fontFamily: "Poppins",
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
  headerTitle: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    marginTop: 20,
    marginLeft: 20,
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
