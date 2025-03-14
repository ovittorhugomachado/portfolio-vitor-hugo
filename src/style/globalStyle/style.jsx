import { createGlobalStyle } from 'styled-components';
import { MediaSizes } from '../mediaSizes';

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: geologica, sans-serif;
        letter-spacing: 1px;
        overflow-wrap: break-word;
        word-break: break-word;
        white-space: normal; 
        transition: background-color 0.4s ease-in-out, border-color 0.5s ease, box-shadow 0.5s ease;
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
        background: var(--background); 
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
        background: var(--background);
            @media (min-width: ${MediaSizes.desktop}) {
                flex-direction: row;
            }
    }

    main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 35px 20px 100px;
            &.home {
                flex-direction: column-reverse;
                    @media (min-width: ${MediaSizes.tablet}) {
                        flex-direction: row;
                        padding-left: 70px;
                    }
            }
            &.projects {
                flex-direction: column;
            }

    }

    h1 {
        font-size: 35px;
        text-align: start;
        color: var(--text);
        border-bottom: 3px solid var(--secondary-color);
            @media (min-width: ${MediaSizes.tablet}) {
                font-size: 43px;
            }
    }
    
    h2 {
        font-size: 30px;
        font-weight: 500;
        color: var(--text);
        text-align: start;
            @media (min-width: ${MediaSizes.tablet}) {
                font-size: 33px;
            }
    }

    h3 {
        font-size: 20px;
        font-weight: 200;
        color: var(--text);
        text-align: start;
            @media (min-width: ${MediaSizes.tablet}) {
                font-size: 26px;
            }
    }

    h4 {
        width: 171px;
        font-size: 20px;
        color: var(--text);
        margin-left: 10px;
        text-align: start;
            @media (min-width: ${MediaSizes.mobileLarge}) {
                font-size: 25px;
            }
            @media (min-width: ${MediaSizes.desktop}) {
                display: none;
                transition: 0.6s ease-in-out;
                    &.menu-open {
                        display: block;
                    }
            }
    }

    h5 {
        font-size: 23px;
        font-weight: 300;
        color: var(--text);
        transition: 0.3s ease-in-out;
        overflow-wrap: normal;
        word-break: normal;
            &:hover {
                color: var(--secondary-color);
            }
    }

    h6 {
        color: var(--text);
        font-weight: 800;
        font-size: 23px;
        margin-top: 10px;
            &.technologie {
                background-color: red
            }
    }

    P {
        color: var(--text);
        padding: 20px 0;
        font-weight: 100;
            &.nav {
                font-size: 11px;
                color: var(--text);
                font-weight: 500;
                padding: 0;
            }
    }

    a {
        cursor: pointer;
        text-decoration: none;
            &.phone-number {
                color: var(--text);
                    &:hover {
                        color: var(--text);
                    }  
            }
            &:hover {
                color: var(--secondary-color);
            }
    }

    svg {
        width: 30px;
        height: 30px;
        color: var(--text);
        transition: 0.4s ease-in-out;
            &.menu-arrow {
                display: none;
                    @media (min-width: ${MediaSizes.desktop}) {
                        display: block;
                        position: absolute;
                        right: -25px;
                        top: 50%;
                        transform: translateY(-185%);
                        cursor: pointer;
                            &.menu-open {
                                transform: translate(-25px, -185%) rotate(180deg);
                            }
                            &:hover {
                                color: var(--secondary-color)
                            }                    
                    }
            }

            &.nav-icon {
                width: 25px;
                height: 25px;
                    @media (min-width: ${MediaSizes.desktop}) {
                        &:hover {
                            color: var(--secondary-color)
                        }
                    }
            }

            &.theme-icon {
                width: 25px;
                height: 25px;
                color: var(--text);
                z-index: 10;
                    &.sun {
                        color: white;
                    }
                    &.moon {
                        color: black;
                    }
            }
            &.link {
                color: var(--primary-color);
                width: 23px;
            }
    }
`;
