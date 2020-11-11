import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loggedInUser, selectLoggedInUser } from '../redux/userSlice';

export default function Home() {
  const [loginStatus, setLoginStatus] = useState();
  let userInfo = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      setLoginStatus(<>
        <p>
          You are logged in as user "{userInfo.username}".
        </p>
        <a href='/logout'>log out</a>
      </>)
    } else {
      setLoginStatus(<>
        <p>
          You are not logged in.
        </p>
        <a href='/login'>go to login page</a>
      </>)
    }
  }, [])

  return(
    <>
      {loginStatus}
    </>
  )
}