import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const ContainterBackground = styled.div`
    width: 170px;
    height: 220px;
    border: 2px solid var(--text);
    border-radius: 10px;
    background-color: transparent;
        @media(min-width: ${MediaSizes.tablet}) {
            width: 195px;
            height: 250px;
        }
`

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: translate(-8px, -8px)
`