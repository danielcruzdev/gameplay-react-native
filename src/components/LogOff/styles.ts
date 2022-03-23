import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    marginTop: 33,
  },
  titleWhiteBold: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
  },
  titlePlay: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
  },
  buttons: {
    flexDirection: "row",
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewButtonNao: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary30,
    width: 160,
    height: 56,
  },
  buttonNao: {
    flex: 1,
    width: 160,
    height: 56,
  },
  viewButtonSim: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    width: 160,
    height: 56,
  },
  buttonSim: {
    flex: 1,
    width: 160,
    height: 56,
  },
  titleButton: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
  }
});
