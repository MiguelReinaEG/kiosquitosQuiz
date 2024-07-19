import { palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  emoji: {
    fontSize: 80,
  },
  title: {
    color: "black",
  },
  topContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 4,
    backgroundColor: palette.title,
    flexDirection: "column",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    padding: 8,
  },
});

export default styles;
