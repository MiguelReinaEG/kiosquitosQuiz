import { palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: palette.title,
  },
  title: {
    fontSize: 24,
  },
  createdAt: {
    fontSize: 20,
  },
});

export default styles;
