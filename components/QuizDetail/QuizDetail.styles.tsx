import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { top: 25 },
  content: {
    alignItems: "center",
    backgroundColor: "hsla(349, 100%, 45%, 1)",
    margin: 8,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    marginVertical: 24,
    fontFamily: "PoppinsBold",
    color: "#fff",
  },
});

export default styles;
