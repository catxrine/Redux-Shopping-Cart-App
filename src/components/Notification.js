// import { Alert } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
// import { Alert } from "@mui/material";
function Notification({ message }) {
  const notification = useSelector((state) => state.ui.notification);
  return (
    <div>
      {notification.open && <alert>{message}</alert>}

      {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
    </div>
  );
}

export default Notification;
