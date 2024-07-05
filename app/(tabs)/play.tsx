import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require("../../assets/images/play.gif")}
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("play");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Play
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 64,
    alignItems: "center",
    width: "100%",
  },
  image: {
    height: "72%",
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 24,
  },
});
