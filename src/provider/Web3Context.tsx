import { createContext, useContext, ReactNode } from 'react';

interface Web3ContextProps {
}

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <Web3Context.Provider value={{ }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};
