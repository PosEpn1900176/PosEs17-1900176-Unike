const mapLocation = id => {
  const requestMap = {
    144: {
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
