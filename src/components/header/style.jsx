import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
        @media (min-width: ${MediaSizes.desktop}) {
            position: static;
            transition: 0.5s ease-in-out;
            width: 70px;
            height: 100vh;
                &.menu-active {
                    width: 313px;
                }
        }
`

export const Menu = styled.header`
    width: 100%;
    background-color: var(--primary-color);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
        &.desktop {
            display: none;
        }
        @media (min-width: ${MediaSizes.mobileLarge}) {
            padding-right: 30px;
        }
        @media (min-width: ${MediaSizes.desktop}) {
            transition: width 0.3s ease-in-out;
            position: fixed;
            top: 0;
            left: 0;
            height: 97.5vh;
            width: 65px;
            flex-direction: column;
            border-radius: 7px;
            padding: 15px 20px 40px;
            margin: 9px;
                &.menu-active {
                    width: 240px;
                }
        }
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`

export const Logo = styled.img`
    width: 40px;
`