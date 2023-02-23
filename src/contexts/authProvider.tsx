import { createContext, useState } from 'react';

export const AuthContext = createContext<AuthContextType>({});
type AuthContextType = {
  user?: any;
  setUser?: any;
}

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string | boolean>(false);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
