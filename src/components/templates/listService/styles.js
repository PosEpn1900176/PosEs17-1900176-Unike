import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default styles;
