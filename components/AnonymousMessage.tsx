import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AnonymousMessage = () => {
  return (
    <View style={styles.anonymousContainer}>
      <Text style={styles.anonymousText}>
        To access the app, you need to login.
      </Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate("/login");
        }}
        style={styles.buttonLogout}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  anonymousContainer: {
    paddingHorizontal: 24,
  },
  anonymousText: {
    marginTop: 128,
    marginBottom: 24,
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
  buttonText: {
    color: "#fff",
  },
});

export default AnonymousMessage;
