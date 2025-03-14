import styled from "styled-components";
import { MediaSizes } from "../../style/mediaSizes";

export const Container = styled.div`
    border-radius: 10px;
    background-color: var(--primary-color);
    margin-top: 30px;
    padding: 40px 20px;
    max-width: 800px;
        @media(min-width: ${MediaSizes.desktop}) {
            max-width: 1000px;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
`

export const Image = styled.img`
    height: 110px;
        @media(min-width: ${MediaSizes.mobileLarge}) {
            height: 160px;
        }
        @media(min-width: ${MediaSizes.desktop}) {
            height: 200px;
        }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerTechnologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

export const Technologie = styled.a`
    color: var(--text);
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 7px;
    border: 2px solid var(--secondary-color);
    cursor: pointer;
        &:hover {
            background-color: var(--secondary-color);
            color: var(--text);
        }
`  

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
        @media(min-width: ${MediaSizes.mobileLarge}) {
            flex-direction: row;
        }
`

export const Link = styled.a`
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 25px;
    color: var(--primary-color);
    background-color: var(--text);
    gap: 10px;
    transition: 0.3s ease-in-out;
        &:hover {
            transform: scale(1.05);
            color: var(--primary-color)
        }
`
