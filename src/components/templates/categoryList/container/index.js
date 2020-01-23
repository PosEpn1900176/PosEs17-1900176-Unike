import React, { useEffect } from 'react';
import CategoryListPresentation from '../presentation';
import { Content } from 'native-base';
import { LoadingControl } from '../../../organisms/loadingControl';
import {
  useLoadCategory,
  useActiveCategory,
} from '../../../../hooks/useCategory';
import { useSelector } from 'react-redux';

const CategoryListContainer = () => {
  const { data, loading } = useSelector(state => state.signup.categoria);
  const active = useActiveCategory();
  const load = useLoadCategory();

  useEffect(() => {
    load();
  }, [load]);

  function handleChange(item) {
    return value => {
      active(item, value);
    };
  }

  return (
    <Content>
      <LoadingControl loading={loading}>
        <CategoryListPresentation data={data} onChange={handleChange} />
      </LoadingControl>
    </Content>
  );
};

export default CategoryListContainer;
