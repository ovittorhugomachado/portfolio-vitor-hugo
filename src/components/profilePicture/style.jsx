import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const ContainterBackground = styled.div`
    width: 200px;
    height: 120px;
    border: 2px solid var(--text);
    border-radius: 10px;
    background-color: transparent;
    margin: 30px 0;
        @media(min-width: ${MediaSizes.tablet}) {
            width: 250px;
            height: 150px;
            margin-left: 35px;
        }
`

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: translate(-8px, -8px)
`