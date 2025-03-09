import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; // Importe o ThemeProvider do styled-components

export const themes = {
    light: {
        background: 'linear-gradient(to bottom right, #D9D9D9, #9f9f9f, #797979, #3A3A3A)',
        primaryColor: '#FFFFFF',
        secondaryColor: '#12CEB0',
        text: '#181818',
        colorActive: '#737373',
    },
    dark: {
        background: '#242424',
        primaryColor: '#181818',
        secondaryColor: '#12CEB0',
        text: '#FFFFFF',
        colorActive: '#404040',
    }
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            <StyledThemeProvider theme={theme}> {/* Passe o tema atual para o ThemeProvider do styled-components */}
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};