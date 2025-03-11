import styled from "styled-components";

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
    top: 65px;
    right: 40px;
    cursor: pointer;
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

` 