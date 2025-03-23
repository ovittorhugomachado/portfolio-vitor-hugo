import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.div`
    width: 63px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    border: 2px solid var(--background);
    background-color: var(--primary-color);
    position: absolute;
    top: 50px;
    right: -1px;
    margin: 0 3px;
    cursor: pointer;
        @media (min-width: ${MediaSizes.desktop}) {
            transform: scale(1);               
                width: 32px;
                height: 63px;
                display: flex;
                flex-direction: column;
                right: -40px;
                top: 5px;
        }
`

export const Button = styled.button`
    width: 45%;
    height: 90%;
    border-radius: 50%;
    border: none;
    background-color: var(--secondary-color);
    position: absolute;
    left: 0;
    transition: 0.3s;
    transform: translateX(2px);
        &.dark {
            transform: translateX(31px);
        }
        @media (min-width: ${MediaSizes.desktop}) {
            width: 90%;
            height: 43%;
            top: 0;
            transform: translate(2px, 2px);
                &.dark {
                transform: translate(2px, 32px);
                }
        }

` 