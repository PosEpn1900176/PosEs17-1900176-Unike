import { Dimensions } from 'react-native';

const mapLocation = () => {
  return {
    Latitude: -(Math.random() * (23.5799 - 23.56111) + 23.56111),
    Longitude: -(Math.random() * (46.6611 - 46.6411) + 46.6411),
  };
};

const hasGeolocation = ({ Latitude, Longitude }) => {
  return Latitude && Longitude;
};

// const addGeolocationData = (requests = []) => {
//   return requests.map(request => {
//     if (!hasGeolocation(request)) {
//       request.EnderecoCliente = {
//         ...request.EnderecoCliente,
//         ...mapLocation(),
//       };
//     }
//     return request;
//   });
// };

const getRegion = (
  { latitude, longitude, Latitude, Longitude },
  delta = true,
) => {
  const { width, height } = Dimensions.get('window');
  let coords = {
    latitude: parseFloat(latitude || Latitude),
    longitude: parseFloat(longitude || Longitude),
  };
  if (delta) {
    coords.latitudeDelta = 0.0922;
    coords.longitudeDelta = 0.0922 * (width / height);
  }

  return { ...coords };
};

const filterRequestWithoutGeolocation = requests =>
  requests.filter(request => hasGeolocation(request.EnderecoCliente));

export { getRegion, filterRequestWithoutGeolocation };
