import { useContext } from 'react';

import { globalContext } from './useGlobalContext';

interface AccessTokenContext {
  accessToken?: string;
  setAccessToken: (accessToken: string) => void;
}

export const useAccessToken = (): AccessTokenContext => {
  const { globalData, setGlobalData } = useContext(globalContext);

  const setAccessToken = (accessToken: string) => {
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  return {
    accessToken: globalData?.accessToken,
    setAccessToken,
  };
};
