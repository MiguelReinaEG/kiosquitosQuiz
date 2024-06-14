import { palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 24,
    width: "100%",
  },
  categoryContainer: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 160,
    backgroundColor: palette.h0s0l100,
    shadowColor: palette.black,
    elevation: 4,
    flexDirection: "column",
    borderRadius: 12,
  },
  title: {
    color: palette.h0s0l0,
    fontSize: 16,
    fontFamily: "Poppins",
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
});

export default styles;
