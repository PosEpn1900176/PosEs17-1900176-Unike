import { Dimensions } from 'react-native';

const useGetRegion = () => {
  const { width, height } = Dimensions.get('window');
  const get = ({ latitude, longitude }, delta = true) => {
    const coords = {
      latitude,
      longitude,
    };
    if (delta) {
      coords.latitudeDelta = 0.0922;
      coords.longitudeDelta = 0.0922 * (width / height);
    }

    return coords;
  };

  return get;
};

export default useGetRegion;
