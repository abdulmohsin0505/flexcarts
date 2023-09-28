import React from "react";
import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default Toast;
