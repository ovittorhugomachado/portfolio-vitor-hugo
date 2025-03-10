import { createGlobalStyle } from 'styled-components';
import { MediaSizes } from '../mediaSizes';

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
        width: 171px;
        font-size: 20px;
        color: var(--text);
        margin-left: 10px;
            @media (min-width: ${MediaSizes.mobileLarge}) {
                font-size: 25px;
            }
            @media (min-width: ${MediaSizes.desktop}) {
                display: none;
                    &.menu-open {
                        display: block;
                    }
            }
    }

    h5 {
        font-size: 23px;
        font-weight: 100;
        color: var(--text);
        transition: 0.3s ease-in-out;
            &:hover {
                color: var(--secondary-color);
            }
    }

    P {
        font-size: 11px;
        color: var(--text);
        font-weight: 200
    }

    a {
        text-decoration: none;
            &:hover {
                color: var(--secondary-color);
            }
    }

    svg {
        width: 30px;
        height: 30px;
        color: var(--text);
        transition: 0.3s ease-in-out;
            &.nav-icon {
                width: 25px;
                height: 25px;
            }
            &:hover {
                color: var(--secondary-color)
            }
    }
`;
