import { palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  separator: {
    padding: 8,
  },
  placeholder: {
    marginTop: 8,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    height: 88,
    borderColor: palette.title,
  },
});

export default styles;
