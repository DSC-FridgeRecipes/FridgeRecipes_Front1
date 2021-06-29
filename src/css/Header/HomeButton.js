import React from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import { shadow } from "../styleUtil";

const BorderedButton = styled(Link)`
    font-weight: 600;
    color: #506AD4;
    border: 1px solid #FFFCE6;
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;

    &:hover {
        background: #C2B8AD;
        color: white;
        ${shadow(1)}
    }

    &:active {
   
        transform: translateY(3px);
    }


`;

const HomeButton = () => (
    <BrowserRouter>
    <BorderedButton to="/">
        홈
    </BorderedButton>
    </BrowserRouter>
);

export default HomeButton;