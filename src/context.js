import React from 'react';

const AppContext = React.createContext();

export const useAppContext = () => React.useContext(AppContext);

const AppContextProvider = ({children}) => {
    const [isModalShown, setIsModalShown ] = React.useState(false);
    const [isSidebarShown, setIsSidebarShown ] = React.useState(false)

    const showModal = () => {
        setIsModalShown( !isModalShown)
    }
    const showSidebar = () => {
        setIsSidebarShown(!isSidebarShown)
    }

    const value = {
        isModalShown,
        isSidebarShown,
        showModal,
        showSidebar
    }

    return( <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider> )
}

export default AppContextProvider;
