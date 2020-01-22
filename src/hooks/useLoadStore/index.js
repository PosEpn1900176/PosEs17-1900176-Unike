import useStorage from '../useStorage';
import { useDispatch, useSelector } from 'react-redux'
import { setContactData } from '../../actions';


const useLoadStore = () => {
    const { getItem } = useStorage('signup');
    const dispath = useDispatch();
    const load = async () => {
        try {
            const signup = await getItem();
            dispath(setContactData(signup.contactData))


        } catch (err) {

        }
    }
    return load
}

export default useLoadStore;