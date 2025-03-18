import { createContext, useState, useEffect } from 'react';

export const themes = {
    light: {
        name: 'light',
        background: '#D9D9D9',
        primaryColor: '#FFFFFF',
        secondaryColor: '#12CEB0',
        text: '#181818',
        colorActive: '#737373',
    },
    dark: {
        name: 'dark',
        background: '#242424',
        primaryColor: '#181818',
        secondaryColor: '#12CEB0',
        text: '#FFFFFF',
        colorActive: '#404040',
    }
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' ? themes.dark : themes.light;
    });

    useEffect(() => {
        localStorage.setItem('theme', theme.name);
    }, [theme]);

    const changeTheme = () => {
        setTheme((prevTheme) => 
            prevTheme.name === 'dark' ? themes.light : themes.dark
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};