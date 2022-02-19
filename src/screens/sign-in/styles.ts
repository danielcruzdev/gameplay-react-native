import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary100
  },
  image: {
    width: '100%',
    height: 360
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    lineHeight: 40,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: theme.fonts.text500
  }
});
