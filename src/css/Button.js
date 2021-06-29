import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from "../css/styleUtil"

const Btn_Wrapper = styled.div`
    margin-top: 0.7rem;
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;

    border-color: #A3CDD9;
    border-width: 0.5px;
    border-style: solid;

    background: ${oc.gray[0]};
    color: #363636;

    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: #A3CDD9;
        ${shadow(0)}
    }

    &:active {
        background: #506AD4;
    }

`;


const Button = ({children}) => {
    return(
        <div>
    <Btn_Wrapper>
        {children}
    </Btn_Wrapper>
    </div>
    );
    };

export default Button;