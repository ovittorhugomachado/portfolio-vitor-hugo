import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.div`
    width: 100vw;
    transition: 0.5s ease-in-out;
        @media (min-width: ${MediaSizes.desktop}) {
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
    transition: width 0.3s ease-in-out;
        &.desktop {
            display: none;
        }
        @media (min-width: ${MediaSizes.mobileLarge}) {
            padding-right: 30px;
        }
        @media (min-width: ${MediaSizes.desktop}) {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 65px;
            flex-direction: column;
            padding: 15px 20px 40px;
                &.menu-active {
                    width: 240px;
                }
        }
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const Logo = styled.img`
    width: 40px;
`