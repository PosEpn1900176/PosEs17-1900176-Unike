import React, { useEffect } from 'react';
import SplashPresentation from '../presentation';
import { useDimensionWindow } from '../../../../hooks';

const SplashContainer = props => {
  const dimension = useDimensionWindow();
  const loadPageLazy = () => {
    setTimeout(() => {
      props.navigation.navigate('Initial');
    }, 2000);
  };
  useEffect(() => {
    loadPageLazy();
  }, []);

  return <SplashPresentation dimension={dimension} />;
};

export default SplashContainer;
