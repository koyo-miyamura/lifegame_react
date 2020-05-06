import React, { FC } from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

type ToastProps = {
  isOpen: boolean;
  message: string;
  onClose?: () => void;
};

const Toast: FC<ToastProps> = ({
  isOpen,
  message,
  onClose = () => undefined,
}) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
