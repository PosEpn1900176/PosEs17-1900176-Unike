import { Dimensions } from 'react-native';

const useDimensionWindow = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return {
    width,
    height,
  };
};
export default useDimensionWindow;
