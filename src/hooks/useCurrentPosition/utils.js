import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

const getPermission = async () => {
  return await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
};
const cleanPosition = id => {
  id && getPermission() && Geolocation.clearWatch(this.watchID);
};

export { getPermission, cleanPosition };
