import { Dimensions } from 'react-native';

const useGetRegion = () => {
  const { width, height } = Dimensions.get('window');
  const get = ({ geolocation }) => {
    return {
      latitude: geolocation.latitude || 1,
      longitude: geolocation.longitude || 1,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * (width / height),
    };
  };

  return get;
};

export default useGetRegion;
