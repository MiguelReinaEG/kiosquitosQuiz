import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Sección 1: Aceptación de los Términos y Condiciones */}
      <View style={styles.section}>
        <Text style={styles.title}>
          Aceptación de los Términos y Condiciones
        </Text>
        <Text style={styles.description}>
          Al acceder o utilizar la aplicación aceptas y estás sujeto a estos
          Términos y Condiciones. Si no estás de acuerdo con alguno de los
          términos establecidos aquí, por favor, no utilices nuestra aplicación.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default TermsAndConditionsScreen;
