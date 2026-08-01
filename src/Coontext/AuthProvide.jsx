import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../assets/Utils/localStorage";

export const AuthContext = createContext();

const AuthProvide = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvide;