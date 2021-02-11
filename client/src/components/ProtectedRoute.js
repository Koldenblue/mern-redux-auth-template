import React from "react";
import { Redirect, Route } from "react-router-dom";
import Loading from './Loading/Loading';

/** Returns loading animation if loading is true (from App.js) and user is still being loaded.
 * Returns child route (in App.js) if loading is done and user is logged in.
 * Protected route redirects to /login, rather than child route, if user is not logged in. */
const ProtectedRoute = ({
  onFailureRedirectToPath = "/login",
  isLoading,
  user,
  ...rest
}) => {
  return isLoading ? (
    <Loading />
  ) : user ? (
    <Route {...rest} />
  ) : (
    <Redirect to={onFailureRedirectToPath} />
  );
};


/* For testing the loading screen code, return the code below instead, which will just return loading screen forever. */
//   return (
//     <Loading />
//   )
// }

export default ProtectedRoute;