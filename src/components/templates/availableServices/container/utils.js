const mapLocation = id => {
  const requestMap = {
    174: {
      latitude: -23.566129,
      longitude: -46.646892,
    },
    175: {
      latitude: -23.570398,
      longitude: -46.645457,
    },
    176: {
      latitude: -23.563222,
      longitude: -46.652666,
    },
    178: {
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
