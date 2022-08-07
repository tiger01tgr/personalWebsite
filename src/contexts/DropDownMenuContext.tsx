// context/todoContext.tsx
import React, { useState, useContext, createContext, PropsWithChildren } from 'react';

interface Menu {
    on: boolean;
}

interface MenuInterface {
    menu: Menu;
    setMenu: (menu: Menu) => void;
}
  
export const MenuContext = createContext<MenuInterface>({menu: {on: false}, setMenu: () => {} })

export const useMenu = () => useContext(MenuContext);

export const MenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [menu, setMenu] = useState({on: false})
    
    return (
        <MenuContext.Provider value={{menu, setMenu}}>
                {children}
        </MenuContext.Provider>
    )
}