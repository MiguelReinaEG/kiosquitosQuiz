import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { Text, View } from "@/components/Themed";
import { useFetchCategories } from "@/services/finance.services.hooks";
import { useMemo } from "react";
import { router } from "expo-router";

export default function ProfileScreen() {
  const { data } = useFetchCategories();
  const ids = useMemo(() => {
    if (!data) return [];
    return data?.map((item) => item.id);
  }, [data]);

  const playRandom = () => {
    const randomIndex = Math.floor(Math.random() * ids.length);
    const id = ids[randomIndex];
    router.push(`/category/${id}`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/play.gif")}
      />
      <TouchableOpacity style={styles.button} onPress={playRandom}>
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
