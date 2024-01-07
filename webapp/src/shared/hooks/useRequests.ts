import { useState } from 'react';

import HTTPCLient from '../service/HTTP/HTTPClient';
import { useNotification } from './useNotification';

const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useNotification();

  const requestGet = async (url: string) => {
    setLoading(true);

    const response = await HTTPCLient.get(url)
      .then((response) => {
        alert('Login realizado com sucesso');
        return response;
      })
      .catch((response) => {
        alert('E-mail e/ou senha inválidos');
        return response;
      });

    setLoading(false);
    return response;
  };

  const requestPost = async (url: string, body: unknown) => {
    setLoading(true);

    const response = await HTTPCLient.post(url, body)
      .then((response) => {
        setNotification('Login realizado com sucesso', 'success');
        return response;
      })
      .catch((error) => {
        setNotification(error.message, 'error');
      });

    setLoading(false);
    return response;
  };

  return {
    loading,
    requestGet,
    requestPost,
  };
};

export default useRequests;
