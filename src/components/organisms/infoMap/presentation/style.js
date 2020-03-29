import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  totalService: {
    padding: 10,
  },
  total: {
    color: 'red',
    fontSize: 20,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoMap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderStyle: 'solid',
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(142,20,20,0.04)',
    paddingBottom: 10,
  },
  control: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
  },
});

export default styles;
