import React, { useContext,useState } from 'react';

const NavContext = React.createContext();

const NavProvider = ({children}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  return (
    <NavContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar}}>
      {children}
    </NavContext.Provider>
  )
}

const useNavContext = () => {
  return useContext(NavContext);
}

export {NavProvider, useNavContext};