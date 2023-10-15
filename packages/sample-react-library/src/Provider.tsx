import { FC, ReactNode, createContext, useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
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

// eslint-disable-next-line react-refresh/only-export-components
export const useConfig = () => {
  const config = useContext(ConfigContext);

  return config;
};

export const Provider: FC<ProviderProps> = ({ children, options = {} }) => {
  return (
    <ConfigContext.Provider value={{ ...defaultConfig, ...options }}>
      <div className={`sample-react-library`}>{children}</div>
    </ConfigContext.Provider>
  );
};
