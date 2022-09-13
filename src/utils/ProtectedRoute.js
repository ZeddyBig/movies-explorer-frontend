import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children, ...props }) => {
  return (loggedIn !== false) ? children : <Navigate to="/" />;
}

export default ProtectedRoute;