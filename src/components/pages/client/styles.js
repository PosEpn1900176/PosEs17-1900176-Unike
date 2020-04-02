import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
  getPositionButton: top => {
    return {
      position: 'absolute',
      top,
      right: 10,
    };
  },
});

export default styles;
