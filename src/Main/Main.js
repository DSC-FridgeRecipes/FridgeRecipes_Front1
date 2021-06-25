import React from 'react';
import styled from 'styled-components';
import Header from './Header';

function Main() {
    return(
        <>
        <Header/>
        <Button>저장된 레시피 조회</Button>
        <Button>저장된 재료 조회</Button>
        </>
    );
}

export default Main;

const Button = styled.button`
	border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: #363636;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
    background-color: #F2CC39;
`;
