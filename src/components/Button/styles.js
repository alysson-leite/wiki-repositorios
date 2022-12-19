import styled from 'styled-components';

export const ButtonContainer = styled.button`
    
    background-color: #fff;
    border: 1px solid #fafafa;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;

    height: 52px;
    width: 25%;

    margin: 20px;

    transition: .2s ease-in-out;

    &:hover {
        opacity: 0.7;

    }

    &:active {
        opacity: 0.3;
    }

`