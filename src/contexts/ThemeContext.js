import React, { useState, useEffect, createContext, useContext } from 'react';
import { getTheme, saveTheme } from '../utils/changeTheme';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [applicationTheme, setApplicationTheme] = useState('light');

    useEffect(() => {
        (
            async () => {
                const currentTheme = await getTheme();
                if(!currentTheme) {
                    await saveTheme(applicationTheme);
                    return;
                }
                setApplicationTheme(currentTheme);
            }
        )()
    }, []);
    
    async function changeTheme() {
        const currentTheme = await getTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setApplicationTheme(newTheme);
        await saveTheme(newTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                applicationTheme, 
                changeTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export function useThemeContext() {
    const context = useContext(ThemeContext);
    return context;
};

export { ThemeContextProvider };
export default ThemeContext;