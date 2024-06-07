import { palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 12,
    borderRadius: 8,
    padding: 12,
  },
  categoryContainer: {
    backgroundColor: palette.primary,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: 96,
    height: 96,
    borderRadius: 10,
  },
  title: {
    color: palette.h0s0l0,
    fontSize: 12,
  },
  emoji: {
    fontSize: 40,
  },
  top: {
    height: "70%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    height: "30%",
  },
  separator: {
    width: 12,
  },
});

export default styles;
