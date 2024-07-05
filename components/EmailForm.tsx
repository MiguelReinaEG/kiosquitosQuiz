import React, { useState } from "react";
import { Alert, StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

import { useAuthStore } from "@/stores/auth/auth.store";
import { supabase } from "@/config/supabase";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const setIsAnonymous = useAuthStore((state) => state.setIsAnonymous);
  const setUser = useAuthStore((state) => state.setUser);

  const signInWithEmail = async () => {
    try {
      setLoading(true);
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      const { session, user } = data ?? {};
      if (session) setIsAnonymous(false);
      if (user) setUser(user);
      setLoading(false);
    } catch (error: any) {
      if (error) Alert.alert(error?.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async () => {
    try {
      setLoading(true);
      const { data } = await supabase.auth.signUp({
        email,
        password,
      });
      const { session, user } = data ?? {};
      if (!session || !user) {
        Alert.alert("Please check your inbox for email verification!");
        return;
      }
      setIsAnonymous(false);
      setUser(user);
      setLoading(false);
    } catch (error: any) {
      if (error) Alert.alert(error?.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced]}>
        <Text>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Text>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          style={styles.buttonIn}
          disabled={loading}
          onPress={signInWithEmail}
        >
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity
          style={styles.buttonUp}
          disabled={loading}
          onPress={signUpWithEmail}
        >
          <Text style={[styles.textButton, styles.textAuxiliary]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    marginVertical: 40,
    padding: 12,
    backgroundColor: "#fff",
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2.24,
    elevation: 8,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  buttonIn: {
    backgroundColor: "hsla(349, 100%, 45%, 1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonUp: {
    backgroundColor: "hsl(0, 0%, 89%)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  textAuxiliary: {
    color: "#000",
  },
});
