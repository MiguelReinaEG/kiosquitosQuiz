import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 8,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: 140,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    marginVertical: 20,
    textAlign: "center",
  },
  content: {
    height: 240,
    alignContent: "center",
  },
  star: {
    flexDirection: "row",
    marginVertical: 4,
  },
});

export default styles;
