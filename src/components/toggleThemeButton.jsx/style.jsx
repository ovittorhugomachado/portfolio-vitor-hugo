import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.div`
    width: 63px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    border: 3px solid var(--primary-color);
    background-color: var(--primary-color);
    position: absolute;
    top: 50px;
    right: -1px;
    margin: 0 3px;
    cursor: pointer;
        &.desktop {
            display: none;
        }   
        @media (min-width: ${MediaSizes.desktop}) {
            display: none;
            &.desktop {
                transform: scale(1);               
                width: 32px;
                height: 63px;
                display: flex;
                flex-direction: column;
                right: -52px;
                top: -10px;
            }
        }
`

export const Button = styled.button`
    width: 50%;
    height: 100%;
    border-radius: 50%;
    border: none;
    background-color: var(--secondary-color);
    position: absolute;
    left: 0;
    transition: 0.3s;
        &.dark {
            transform: translateX(28px);
        }
        @media (min-width: ${MediaSizes.desktop}) {
            width: 100%;
            height: 47%;
            top: 0;
                &.dark {
                transform: translate(0, 30px);
                }
        }

` 