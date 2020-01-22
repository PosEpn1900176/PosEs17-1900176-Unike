import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../useFetch';
import { useEffect } from 'react';
import { loadCategory, setCategory } from '../../actions'
import deepmerge from 'deepmerge'

export const useLoadCategory = () => {
    const storeCategory = useSelector(state => state.signup.categoria);
    const [category, fetch] = useFetch('categories');
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadCategory(category));

    })

    const load = () => {
        fetch();
    }

    return load;
}

export const useActiveCategory = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.signup.categoria);

    const set = (itm, val) => {
        let categoryData = [...selector.data]

        const data = categoryData.map(d => {
            d.Servicos = d.Servicos.map(service => {
                if (itm.Id === service.Id) {
                    service.active = val;
                }
                return service;
            });
            return d;
        })

        dispatch(setCategory({
          ...selector,
          data
        }))
    }

    return set;
}

