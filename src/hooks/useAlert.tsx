import React, { useState, useContext, useCallback, ReactNode } from 'react';
import Alert, { AlertProps } from '../components/Alert';

type AlertProviderProps = {
  children: ReactNode;
};

type OpenAlertProps = {
  message: string;
  action: () => void;
};

type OpenAlert = {
  openAlert: ({ message, action }: OpenAlertProps) => void;
};

function AlertContainer({ open, message, btConfirm }: AlertProps) {
  return <Alert open={open} message={message} btConfirm={btConfirm} />;
}

const AlertContext = React.createContext<OpenAlert>(
  null as unknown as OpenAlert,
);

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [action, setAlertAction] = useState<OpenAlertProps['action']>();

  const openAlert = useCallback(
    ({ message, action }) => {
      setAlertMessage(message || '');
      setAlertAction(action);
      setOpen(true);
    },
    [setOpen],
  );

  const handleConfirm = () => {
    if (action) {
      action();
    }

    setOpen(false);
  };

  return (
    <AlertContext.Provider
      value={{
        openAlert,
      }}>
      <AlertContainer
        open={open}
        message={alertMessage}
        btConfirm={handleConfirm}
      />
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const alertHelpers = useContext(AlertContext);

  return alertHelpers;
};

export { AlertContext, useAlert };
export default AlertProvider;
