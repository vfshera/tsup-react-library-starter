import { FC, ReactNode, createContext, useContext, useMemo } from "react";

export const defaultConfig = {
  btnId: "sample-btn",
  headingId: "sample-heading",
};

export type Config = typeof defaultConfig;

export interface ProviderProps {
  children: ReactNode;
  options?: Partial<Config>;
}
const ConfigContext = createContext<Config>(defaultConfig);

export const useConfig = () => {
  const config = useContext(ConfigContext);

  return config;
};

export const Provider: FC<ProviderProps> = ({ children, options = {} }) => {
  const config = useMemo<Config>(
    () => ({ ...defaultConfig, ...options }),
    [options],
  );
  return (
    <ConfigContext.Provider value={config}>
      <div className="sample-react-library">{children}</div>
    </ConfigContext.Provider>
  );
};
