import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ddd',
    height: 70,
    width: 70,
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 30,
  },

  flex: {
    flex: 1,
    display: 'flex',
  },
  label: {
    width: 100,
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  actionsButton: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 15,
  },
});

export default styles;
