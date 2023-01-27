import { useState } from "react";
import { createContext } from "react";

export const signInContext = createContext();

const SignInProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <signInContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </signInContext.Provider>
  );
};

export default SignInProvider;
