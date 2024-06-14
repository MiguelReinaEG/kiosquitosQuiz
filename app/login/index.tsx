import * as Linking from "expo-linking";
import { router, useNavigation } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { createSessionFromUrl, performOAuth } from "./login.helpers";
import { styles } from "./login.screen.styles";

import EmailForm from "@/components/EmailForm";
import { useAuthStore } from "@/stores/auth/auth.store";

WebBrowser.maybeCompleteAuthSession(); // required for web only

export default function Auth() {
  const isAnonymous = useAuthStore((state) => state.isAnonymous);
  const navigation = useNavigation();
  const setIsAnonymous = useAuthStore((state) => state.setIsAnonymous);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (!isAnonymous) {
      setTimeout(() => {
        router.replace("/");
      }, 1000);
    }
  }, [isAnonymous]);

  // Handle linking into app from email app.
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);
  const [loading] = useState(false);

  // to warm up the browser
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Login Screen</Text>
      <View style={styles.content}>
        <EmailForm />
        {/* <TouchableOpacity
          style={[styles.githubButton, { opacity: 0.7 }]}
          onPress={() => performOAuth(setIsAnonymous, setUser)}
          disabled={true}
        >
          <Text style={{ color: "#fff" }}>
            {loading ? "loading" : "Sign in with GitHub"}
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
