import React, { createContext, useState, useContext } from 'react';


export const GlobalContext = createContext({});

export const GlobalProvider = props => {
    const [theme, setTheme] = useState(() => {
        if(!localStorage.getItem("theme")){
            return window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
        }else{
            return localStorage.getItem("theme") === 'light'?'light':'dark';
        }
    });
    return(
        <GlobalContext.Provider
            value={{
                theme, 
                setTheme
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobal = () => useContext(GlobalContext);