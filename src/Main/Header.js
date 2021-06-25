import React from 'react';
import styled from 'styled-components';


function Header(){
    return(
        <div>
<Container>
    <a href="/routes/Home.js"><h2>냉장고의 남은 재료를 부탁해!</h2></a>
</Container>
</div>
    );
}

export default Header;

const Container = styled.div`
width: 100%;
height: 50px;
text-align: right;
background-color: #506AD4;
color: #FFFFFF;
`

