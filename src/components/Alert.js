import { useContext } from "react";
import React from "react";
import alertContext from "../context/alerts/alertcontext";

const Alert = (props) => {
  const context1 = useContext(alertContext);
  const { alert } = context1;

    const capatalize = (word) => {
        if(word === "danger"){
          word = "error";
        } 
        const text = word.toLowerCase();
        return word.charAt(0).toUpperCase() + text.slice(1);
    }
  return (
    alert && <div>
      <div className={`alert alert-${alert.type}`} role="alert">
       <strong>{capatalize(alert.type)}</strong> : {alert.msg}
      </div>
    </div>
  );
};

export default Alert;