import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.nav`
        &.mobile {
            width: 100%;
            background-color: var(--primary-color);
            position: fixed;
            bottom: 0;
            display: flex;
            justify-content: center;
            padding: 10px;
                @media (min-width: ${MediaSizes.desktop}) {
                    display: none
                }
        }
        &.desktop {
            display: none;
            @media (min-width: ${MediaSizes.desktop}) {
                display: flex;
                flex-direction: column;
            }
        }
`

export const List = styled.ul`
    &.mobile {
        width: 100%;
        max-width: 550px;
        min-width: 320px;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
    }
    &.desktop {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`