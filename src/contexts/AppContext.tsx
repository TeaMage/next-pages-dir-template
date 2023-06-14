import { createContext, useContext, useState } from 'react';

type AppContextType = {
  appState: number;
  setAppState: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appState, setAppState] = useState<number>(1);

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error('context error');
  }

  return appContext;
}
