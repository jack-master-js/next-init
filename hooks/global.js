import { createContext, useContext, useState } from 'react';

//Context
const Context = createContext();

//Provider
export const StateProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    return (
        <Context.Provider
            value={{
                isLoading,
                setLoading,
            }}
        >
            {children}
        </Context.Provider>
    );
};

//Global State
export const useGlobalState = () => useContext(Context);
