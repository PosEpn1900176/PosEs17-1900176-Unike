import useFetch from '../useFetch';

const useAproveRequest = () => {
  const [data, send] = useFetch('aproveRequest', 'post');
  const fetch = ({ query, params }) => {
    send({
      query,
      params,
    });
  };

  return [data, fetch];
};

export default useAproveRequest;
