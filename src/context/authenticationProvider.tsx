import { createContext, useState } from 'react';

const AuthContext = createContext(null);

export default function MyApp({ children }: any) {
  const [user, setUser] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={user, setUser}>
      {children}
    </AuthContext.Provider>
  );
}
