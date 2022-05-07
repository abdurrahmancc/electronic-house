import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Hooks/Firebase/Firebase";
import EmailVerification from "../../EmailVerification/EmailVerification";
import PageLoading from "../../PageLoading/PageLoading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <PageLoading></PageLoading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user?.providerData[0]?.providerId == "password" && !user?.emailVerified) {
    return <EmailVerification></EmailVerification>;
  }
  return children;
};

export default RequireAuth;
