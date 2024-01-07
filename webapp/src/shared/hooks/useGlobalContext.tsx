import { createContext, useState } from 'react';

interface GlobalData {
  accessToken?: string;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

export const globalContext: React.Context<GlobalContextProps> = createContext(
  {} as GlobalContextProps,
);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <globalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </globalContext.Provider>
  );
};
