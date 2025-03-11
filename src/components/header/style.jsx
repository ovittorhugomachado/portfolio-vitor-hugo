import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.header`
    width: 100%;
    background-color: var(--primary-color);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: width 0.3s ease;
        @media (min-width: ${MediaSizes.mobileLarge}) {
            padding-right: 30px;
        }
        @media (min-width: ${MediaSizes.desktop}) {
            position: fixed;
            left: 0;
            height: 100%;
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
    align-items: center
`

export const Logo = styled.img`
    width: 40px;
`

