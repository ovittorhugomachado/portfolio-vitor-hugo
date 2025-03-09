import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: var(--primary-color);
    padding: 10px 20px;
    display: flex;
    align-items: center;
        @media (min-width: 1024px) {
            position: fixed;
            left: 0;
            height: 100%;
            width: 65px;
            flex-direction: column;
            padding-top: 15px;
            padding-bottom: 40px;
        }
`

export const Logo = styled.img`
    width: 40px;
`
