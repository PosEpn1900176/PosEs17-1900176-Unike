import Geolocation from 'react-native-geolocation-service';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPermission, cleanPosition } from './utils';
import { setCurrentPositionMap } from '../../actions';

// const getLocation = async () => {
//   return new Promise((resolve, reject) => {
//     if (!getPermission()) {
//       console.error(
//         'Você deve aceitar acesso a sua geolocalização para utilizar este sistema',
//       );
//     }
//     Geolocation.getCurrentPosition(
//       position => {
//         resolve(position);
//         // dispatch(setCurrentPositionMap(position));
//       },
//       error => console.log('ERROR TENTANDO OBTER A LOCALIZAÇÃO'),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//         forceRequestLocation: true,
//       },
//     );
//     const watchId = Geolocation.watchPosition(position => {
//       resolve({ position });
//       // dispatch(setCurrentPositionMap(position));
//     });
//   });
// };

const useCurrentPosition = async () => {
  const { coords = {} } = useSelector(
    state => state.services.map.currentPosition,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let watchId;
    if (getPermission()) {
      Geolocation.getCurrentPosition(
        position => {
          dispatch(setCurrentPositionMap(position));
        },
        error => console.log('ERROR TENTANDO OBTER A LOCALIZAÇÃO'),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
      watchId = Geolocation.watchPosition(position => {
        dispatch(setCurrentPositionMap(position));
      });
    }

    return cleanPosition(watchId);
  }, [dispatch]);

  return coords;
};

export default useCurrentPosition;
