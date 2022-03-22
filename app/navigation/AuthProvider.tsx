import React, {createContext, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

type AuthContextValue = {
  user: boolean;
  setUser: (_user) => void;
  login: (email, password) => void;
  register: (email, password) => void;
  logout: () => void;
};

const authContextDefaultValues: AuthContextValue = {
  user: null,
  setUser: () => {},
  login: () => {},
  register: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextValue>(
  authContextDefaultValues,
);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
