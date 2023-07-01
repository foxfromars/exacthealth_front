import {
  createContext,
  useState,
} from "react";

interface AlertInterface {
  isOpen: boolean;
  message?: string;
  type?: string;
}

interface AlertContextInterface {
  alert?: AlertInterface;
  setAlert?: any;
}

export const AlertContext = createContext<AlertContextInterface>({});

export default function AlertProvider({ children }: any) {
  const [alert, setAlert] = useState<AlertInterface>({
    isOpen: false,
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
