import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';

export default function Home() {
  const [loginStatus, setLoginStatus] = useState();
  const dispatch = useDispatch();
  let userInfo = useSelector(selectLoggedInUser);

  const logout = () => {
    Axios.get('api/logout').then(() => {
      // reloading the page also works, since the logged in user is retrieved from the store upon page load
      dispatch(loggedInUser(null));
      // window.location.reload();
    })
  }

  // upon login status change, conditionally render home page
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      setLoginStatus(
      <div className='home'>
        <p>
          You are logged in as user "{userInfo.username}".
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
  }, [userInfo])


  return(
    <>
      {loginStatus}
    </>
  )
}