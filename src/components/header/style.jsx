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
                    width: 300px;
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

export const HamburgerContainer = styled.div`
    display: none;
        @media (min-width: ${MediaSizes.desktop}) {
            margin: auto 0;
            width: 30px;
            height: 27px;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
        }
`

export const HamburgerLine = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--text);
    position: relative; 
    transition: all 0.5s ease;
        &::before,
        &::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: var(--text);
            position: absolute;
            left: 0;
            transition: all 0.5s ease;
        }
        &::before {
            top: -12px; 
        }
        &::after {
            top: 12px; 
        }
        &.active {
            background: transparent;
        }
        &.active::before {
            transform: rotate(45deg);
            top: 0;
        }
        &.active::after {
            transform: rotate(-45deg);
            top: 0; 
        }
`;
