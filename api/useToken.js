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
    sessionStorage.setItem('token', userToken.id);
    sessionStorage.setItem('username', userToken.username);
    setToken(userToken);
  };

  const deleteToken = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setToken(getToken());
  };

  return {
    saveToken,
    deleteToken,
    token,
  };
}
