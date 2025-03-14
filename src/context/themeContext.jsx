import { createContext, useState } from 'react';

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
    const [theme, setTheme] = useState(themes.light);

    const changeTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};