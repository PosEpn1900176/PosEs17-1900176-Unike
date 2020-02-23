import { Dimensions } from 'react-native';

const useGetRegion = () => {
  const { width, height } = Dimensions.get('window');
  const get = ({ latitude, longitude }) => {
    return {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * (width / height),
    };
  };

  return get;
};

export default useGetRegion;
