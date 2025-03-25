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
        justify-content: center;
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
        max-width: 1100px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 105px 20px 100px;
            @media (min-width: ${MediaSizes.desktop}) {
                padding-top: 50px;
            }
            &.home {
                justify-content: center;
                align-items: center;
                gap: 40px;
                    @media (min-width: ${MediaSizes.tablet}) {
                    }
                    @media (min-width: ${MediaSizes.desktop}) {
                        flex-direction: row;
                    }
            }
            &.contact {
                justify-content: center;
            }
    }

    div {
            &.picture-and-name {
                display: flex;
                align-items: center;
                gap: 20px;
            }
            &.cv-button {
                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: center;
                margin-top: 20px;
            }
            &.container-skills {
                max-width: 1000px;
                margin-top: 30px;
            }
            &.skills {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;   
                gap: 20px;
                margin: 20px; 
            }
    }

    h1 {
        font-size: 35px;
        text-align: start;
        color: var(--text);
            @media (min-width: ${MediaSizes.tablet}) {
                font-size: 43px;
            }
    }
    
    h2 {
        font-size: 30px;
        font-weight: 500;
        color: var(--text);
        text-align: center;
            &.home {
                text-align: start;
            }
            @media (min-width: ${MediaSizes.tablet}) {
                font-size: 27px;
            }
    }

    h3 {
        width: 70%;
        font-size: 20px;
        font-weight: 200;
        color: var(--text);
        text-align: start;
        padding-top: 4px;
        border-top: 3px solid var(--secondary-color);
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
        font-size: 18px;
        font-weight: 200;
        color: var(--text);
        transition: 0.3s ease-in-out;
        overflow-wrap: normal;
        word-break: normal;
        margin-top: 20px;
            &.nav {
                margin: 0;
                    &:hover {
                        color: var(--secondary-color);
                    }
            }
            &.active {
                color: var(--secondary-color)
            }
            &.skill {
                padding: 7px 15px;
                border-radius: 7px;
                background-color: var(--primary-color);
                margin-top: 0;
            }
            &.title {
                font-size: 19px;
                font-weight: 500;
            }
    }

    h6 {
        color: var(--text);
        font-weight: 500;
        font-size: 16px;
        white-space: nowrap;
            &.technologie {
                background-color: var(--background);
            }
            &.email {
                font-size: 15px;
                font-weight: 200;
                margin: 5px 0;
                    @media (min-width: ${MediaSizes.mobileLarge}) {
                        font-size: 18px;
                    }
            }
    }

    P {
        font-size: 16px;
        color: var(--text);
        padding: 7px 0;
        font-weight: 100;
            &.home {
                font-size: 19px;
                line-height: 1.5;
                padding: 30px 25px 0;
                    @media (min-width: ${MediaSizes.desktop}) {
                        max-width: 500px;
                    }
            }
            &.large {
                font-size: 20px;
                text-align: start;
                padding: 0;
            }
            &.nav {
                font-size: 11px;
                color: var(--text);
                font-weight: 200;
                padding: 0;
            }
            &.active {
                color: var(--secondary-color)
            }
    }

    a {
        cursor: pointer;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            &.cv {
                padding: 10px;
                color: var(--text);
                border-radius: 20px;
                border: 2px solid var(--text);
                    &:hover {
                        background-color: var(--text);
                        color: var(--background)
                    }
            }
            &.download-cv {
            border-radius: 50px;
                border: 2px solid var(--text);
                    &:hover {
                        background-color: var(--text);
                        color: var(--background)
                    }
            }
            &.phone-number {
                width: 192px;
                padding: 5px;
                color: var(--text);
                align-items: start;
                flex-direction: row;
                justify-content: start;
                gap: 8px;
                    &:hover {
                        color: var(--background);
                        background-color: var(--text);
                        border-radius: 7px;
                    }  
            }
            &:hover {
                color: var(--secondary-color);
            }
    }

    img {
        user-select: none;
    }

    svg {
        width: 60px;
        height: 60px;
        color: var(--text);
        transition: 0.4s ease-in-out;
            &.download {
                height: 40px;
                width: 40px;
                border-radius: 20px;
                padding: 7px;
                    &:hover {
                        color: var(--background)
                    }
            }
            &.whatsapp {
                width: 20px;
                height: 20px;
                    &:hover {
                        color: var(--background-color)
                    }
            }
            @media (min-width: ${MediaSizes.desktop}) {
                &:hover {
                    color: var(--secondary-color);
                }
            }
            &.menu-arrow {
                display: none;
                    @media (min-width: ${MediaSizes.desktop}) {
                        width: 30px;
                        height: 30px;
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
                width: 23px;
                height: 23px;
                    &.active {
                        color: var(--secondary-color);
                    }
                    @media (min-width: ${MediaSizes.desktop}) {
                        width: 25px;
                        height: 25px;
                        &:hover {
                            color: var(--secondary-color)
                        }
                    }
            }
            &.social-media {
                width: 30px;
                height: 30px;
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
                width: 30px;
                height: 30px;
                color: var(--primary-color);
                width: 23px;
            }
            &.skill {
                &:hover {
                    color: var(--text);
                }
            }
    }
`;
