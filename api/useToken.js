import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    let tokenString;
    if (typeof window !== 'undefined') {
      tokenString = window.sessionStorage.getItem('token');
    }
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const deleteToken = () => {
    sessionStorage.removeItem('token');
    setToken(getToken());
  };

  return {
    saveToken,
    deleteToken,
    token,
  };
}
