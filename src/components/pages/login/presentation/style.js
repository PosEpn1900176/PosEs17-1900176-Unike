import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  hidden: {
    display: 'none',
  },
  messageTitle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'space-around'
  },
  button: {
    margin: 15,
  },
  signup: {
    height: 20,
    margin: 10,
    textAlign: 'right',
  },
});

export default style;
