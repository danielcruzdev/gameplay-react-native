import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.overlay
  },
  container: {
    height: 150,
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
});