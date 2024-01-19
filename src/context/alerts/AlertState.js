import React, { useState } from "react";
import alertContext from "./alertcontext";

const AlertState = (props) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      type: status,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <alertContext.Provider value={{ alert,showAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
