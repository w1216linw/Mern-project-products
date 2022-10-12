import React, { useContext, useState } from 'react';

const HomeContext = React.createContext();

export const HomeProvider = ({children}) => {

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const openDetail = (product) => {
    setCurrentProduct(product);
    setIsDetailOpen(true);
  }

  const closeDetail = () => {
    setIsDetailOpen(false);
  }

  return (
    <HomeContext.Provider value={{isDetailOpen, openDetail, closeDetail, currentProduct}}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => {
  return useContext(HomeContext);
}