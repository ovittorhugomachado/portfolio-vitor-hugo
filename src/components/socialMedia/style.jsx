import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.div`
    margin-right: 0;
    display: flex;
    gap: 10px;
    position: relative;
        @media (min-width: ${MediaSizes.desktop}) {
            flex-direction: column;
            justify-content: end;
            margin-bottom: 0;   
            height: 100px;
                &.menu-open {
                    flex-direction: row;
                } 
        }
`   

export const Item = styled.a`
    width: 30px;
    height: 30px;
`