import styled from 'styled-components';
import {shadow} from "../css/styleUtil"
import oc from 'open-color';

const Positioner = styled.div` //화면 가운데에 고정시킨다.
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div` //그림자 설정
    width: 500px;
    padding: 7px;
    background-color: #A3CDD9;
    ${shadow(2)}
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    background-color: #ffffff;
    
`;




const Wrapper = ({children}) => {
    return(
    <Positioner>
        <ShadowedBox>
            <Contents>
            {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
    );
}

export default Wrapper;