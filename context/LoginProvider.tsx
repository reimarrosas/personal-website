import { createContext, useState } from "react";
import { StateContext } from "./types";

export const LoginContext = createContext<StateContext<boolean>>({
  state: false,
  setState: (b: boolean) => {},
});

const LoginProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{ state: isLoggedIn, setState: setIsLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
