import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  alert: {
    display: 'flex',
    top: height / 4,
    position: 'absolute',
    height: height / 2,
    width,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    height: height / 2 - 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  control: {
    display: 'flex',
    backgroundColor: '#eee',
    alignItems: 'flex-end',
  },
  button: {
    width: 'auto',
  },
});

export default styles;
