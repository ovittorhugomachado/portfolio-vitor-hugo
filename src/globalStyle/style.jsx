import { createGlobalStyle } from 'styled-components';

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: geologica, sans-serif;
        letter-spacing: 1px;
        transition: background-color 0.3s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        --background: ${({ theme }) => theme.background};
        --primary-color: ${({ theme }) => theme.primaryColor};
        --secondary-color: ${({ theme }) => theme.secondaryColor};
        --text: ${({ theme }) => theme.text};
        --color-active: ${({ theme }) => theme.colorActive};
    }

    html {
        width: 100%;
        overflow: auto;
    }

    body {
        width: 100%;
        min-height: 100vh; 
        margin: 0 auto;
        background: var(--background); /* Corrigido para usar --background */
        overflow-y: auto; 
    }

    #root {
        width: 100%;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        text-align: center;
        background: var(--background); /* Corrigido para usar --background */
    }

    h4 {
        font-size: 20px;
        color: var(--text);
        margin-left: 10px;
            @media (min-width: 400px) {
                font-size: 25px;
                    &.name {
                        display: none;
                    }
            }
    }

    svg {
        &.svg-inline--fa {
            width: 25px;
            height: 25px;
            color: var(--text)
        }
    }
`;

export const GlobalStyle = () => {
    return <Style />;
};