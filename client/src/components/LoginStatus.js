import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from '../redux/userSlice';

// This page can be reached whether logged in or not, but will display different contents depending on login status.
export default function LoginStatus(props) {
  const [loginStatus, setLoginStatus] = useState();
  const dispatch = useDispatch();
  let currentUser = useSelector(selectCurrentUser);

  const logout = () => {
    Axios.get('api/logout').then(() => {
      dispatch(setCurrentUser(null));
      // reloading the page with window.location.reload() also works to log the user out, since the initial null user value is retrieved from the store upon page load
    })
  }

  // upon login status change, conditionally render home page
  useEffect(() => {
    if (currentUser) {
      // console.log(userInfo);
      setLoginStatus(
        <div className='home'>
          <p>
            You are logged in as user "{currentUser.username}".
        </p>
          <button className='btn-primary btn' onClick={logout}>log out</button>
        </div>)
    } else {
      setLoginStatus(
        <div className='home'>
          <p>
            You are not logged in.
        </p>
          <a href='/login'>Go to login page</a>
        </div>)
    }
  }, [currentUser])

  // this code gets rid of the flash of 'you are not logged in' while still loading the logged in user
  if (props.loading) {
    return (<></>)
  }
  else {
    return (
      <>
        {loginStatus}
      </>
    )
  }
}