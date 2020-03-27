const mapLocation = id => {
  const requestMap = {
    189: {
      latitude: -23.566129,
      longitude: -46.646892,
    },
    186: {
      latitude: -23.570398,
      longitude: -46.645457,
    },
    154: {
      latitude: -23.563222,
      longitude: -46.652666,
    },
    190: {
      latitude: -23.563222,
      longitude: -46.652666,
    },
  };
  return requestMap[id];
};

const addGeolocationData = (requests = []) => {
  return requests.map(request => {
    request.geolocation = mapLocation(request.Id);
    return request;
  });
};

export { addGeolocationData };
