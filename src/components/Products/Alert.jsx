import React, { useEffect } from "react";

const Alert = ({ removeAlert, msg }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <p>{msg}</p>;
};

export default Alert;
