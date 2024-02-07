import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext(null);


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]);

  const addProducts = (newProducts) => {
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
  };  

    const addToCart = (item) => {
        setCart(item);
        localStorage.setItem('cart',JSON.stringify(item))
    };
    
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

  const addUserData = (newData) => {
    setUserData((prevUserData) => ({...prevUserData,...newData }));
    localStorage.setItem('user',JSON.stringify(newData))
  
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
  localStorage.removeItem('user');
  localStorage.removeItem('cart');
  setIsLoggedIn(false);
}


  return (
    <UserContext.Provider value={{ userData, addUserData ,checkLoginStatus,loginUser,isLoggedIn,logoutUser,cart,addToCart , removeFromCart,products , addProducts}}>
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



