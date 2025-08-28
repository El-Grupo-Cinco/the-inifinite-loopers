import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getCurrentUsername,
  loadSession,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword as resetPw,
} from "../auth/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const s = loadSession();
    return s?.username ? { username: s.username } : null;
  });

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "til_session") {
        const s = loadSession();
        setUser(s?.username ? { username: s.username } : null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = async (u, p) => {
    const res = await loginUser(u, p);
    setUser({ username: res.username });
    return res;
  };

  const register = async (u, p) => {
    const res = await registerUser(u, p);
    setUser({ username: res.username });
    return res;
  };

  const resetPassword = async (u, p) => {
    const res = await resetPw(u, p);
    setUser({ username: res.username });
    return res;
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const value = { user, login, logout, register, resetPassword, getCurrentUsername };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
