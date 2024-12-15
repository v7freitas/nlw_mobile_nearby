import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: colors.gray[100],
  },
  name: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.gray[600],
  },
  description: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[500],
    marginTop: 12,
    marginBottom: 32,
    lineHeight: 22,
  },
  group: {
    width: "100%",
    borderBottomWidth: 1,
    borderBlockColor: colors.gray[200],
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: 12,
  },
  rule: {},
});
