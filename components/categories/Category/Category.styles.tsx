import { palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.title,
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderColor: "lightgrey",
  },
  title: {
    color: "black",
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default styles;
