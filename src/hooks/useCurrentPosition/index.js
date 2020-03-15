import Geolocation from 'react-native-geolocation-service';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPermission, cleanPosition } from './utils';
import { setCurrentPositionMap } from '../../actions';

// const getLocation = () => {
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
//         maximumAge: 10000,
//         forceRequestLocation: true,
//       },
//     );
//     Geolocation.watchPosition(position => {
//       resolve({ position });
//       // dispatch(setCurrentPositionMap(position));
//     });
//   });
// };

const useCurrentPosition = async () => {
  const currentPosition = useSelector(
    state => state.services.map.currentPosition,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let watchId;
    if (getPermission()) {
      Geolocation.getCurrentPosition(
        position => {
          console.log('Finded', position);
          dispatch(
            setCurrentPositionMap({
              loading: false,
              coords: position,
              error: false,
            }),
          );
        },
        error => {
          console.log('ERROR TENTANDO OBTER A LOCALIZAÇÃO', error);
          dispatch(
            setCurrentPositionMap({
              loading: false,
              coords: {
                longitude: -46.6523317,
                latitude: -23.5654183,
              },
              error: true,
            }),
          );
        },
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 },
      );
      watchId = Geolocation.watchPosition(position => {
        dispatch(setCurrentPositionMap(position));
      });
    }

    return cleanPosition(watchId);
  }, []);

  return currentPosition;
};

export default useCurrentPosition;
