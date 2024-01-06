import axios from 'axios';
import { useState } from 'react';

const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const requestGet = async (url: string) => {
    setLoading(true);

    const response = await axios({
      method: 'get',
      url: url,
    })
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

    const response = await axios({
      method: 'post',
      url: url,
      data: body,
    })
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

  return {
    loading,
    requestGet,
    requestPost,
  };
};

export default useRequests;
