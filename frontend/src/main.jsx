import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <TaskProvider>
      <App />

      <Toaster position="top-right" />
    </TaskProvider>
  </AuthProvider>
);