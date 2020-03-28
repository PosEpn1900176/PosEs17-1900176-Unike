const mapLocation = id => {
  const map = {};
  // for (let i = 154; i >= 200; i++) {
  //   map[i] = {
  //     latitude: -Math.random() * (23.571111 - 23.51111) + 23.51111,
  //     longitude: -Math.random() * (46.661111 - 641111) + 641111,
  //   };
  // }
  // return map;
  return {
    latitude: -(Math.random() * (23.5799 - 23.56111) + 23.56111),
    longitude: -(Math.random() * (46.6611 - 46.6411) + 46.6411),
  };
};

// const mapLocation1 = id => {
//   const requestMap = {
//     154: {
//       latitude: -23.566129,
//       longitude: -46.646892,
//     },
//     155: {
//       latitude: -23.570398,
//       longitude: -46.645457,
//     },
//     156: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     174: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     175: {
//       latitude: -23.566129,
//       longitude: -46.646892,
//     },
//     176: {
//       latitude: -23.570398,
//       longitude: -46.645457,
//     },
//     178: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     180: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     181: {
//       latitude: -23.566129,
//       longitude: -46.646892,
//     },
//     182: {
//       latitude: -23.570398,
//       longitude: -46.645457,
//     },
//     183: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     184: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     185: {
//       latitude: -23.570398,
//       longitude: -46.645457,
//     },
//     187: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//     188: {
//       latitude: -23.563222,
//       longitude: -46.652666,
//     },
//   };
//   return requestMap[id];
// };

const addGeolocationData = (requests = []) => {
  return requests.map(request => {
    request.geolocation = mapLocation(request.Id);
    return request;
  });
};

export { addGeolocationData };
