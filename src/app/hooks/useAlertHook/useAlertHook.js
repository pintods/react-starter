import { useState } from "react";

const useAlertHook = () => {
  const initState = {
    alertMessage: null,
    alertType: null
  };

  const [alertState, setAlertState] = useState({
    ...initState,
    addAlert: (alertMessage, alertType) => {
      handleAddAlert(alertMessage, alertType);
    },
    clearAlert: () => handleClearAlert()
  });

  const handleAddAlert = (alertMessage, alertType) => {
    const newState = { alertMessage, alertType };
    setAlertState({ ...alertState, ...newState });
  };

  const handleClearAlert = () => {
    setAlertState({ ...alertState, ...initState });
  };

  return alertState;
};

export default useAlertHook;
