import useFetch from '../useFetch';

const useAproveRequest = () => {
  const [data, send] = useFetch('aproveRequest', 'post');
  const fetch = params => {
    send(params);
  };

  return [data, fetch];
};

export default useAproveRequest;
