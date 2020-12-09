import React from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/userSlice';

export default function Home() {
  const dispatch = useDispatch();

  const logout = () => {
    Axios.get('api/logout').then(() => {
      // reloading the page also works, since the logged in user is retrieved from the store upon page load
      dispatch(setCurrentUser(null));
      // window.location.reload();
    })
  }

  return(
    <>
      <h1>This page is protected by ProtectedRoute.js, and is only reachable when logged in.</h1>
      <button onClick={logout}>log out</button>
    </>
  )
}