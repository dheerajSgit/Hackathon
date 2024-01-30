import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext(null);


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  const addUserData = (newData) => {
    setUserData((prevUserData) => ({...prevUserData, ...newData }));
    localStorage.setItem('user',JSON.stringify(userData))
  
  };
  


  const checkLoginStatus = () => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
        setIsLoggedIn(true);
    }
};

const loginUser = (token) => {
  localStorage.setItem('token', token);
  setIsLoggedIn(true);
};

const logoutUser = () => {
  localStorage.removeItem('token');
  setIsLoggedIn(false);
}


  return (
    <UserContext.Provider value={{ userData, addUserData ,checkLoginStatus,loginUser,isLoggedIn,logoutUser}}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};



