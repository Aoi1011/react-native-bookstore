import react, {createContext} from 'react';
import auth from '@react-native-firebase/app';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
