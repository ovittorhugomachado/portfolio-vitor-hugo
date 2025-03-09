import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    margin-right: 0;
    display: flex;
    gap: 10px;
        @media (min-width: 1024px) {
            flex-direction: column;
            margin-bottom: 0;    
        }
`   