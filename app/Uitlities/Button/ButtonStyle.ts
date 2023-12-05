import { Colors } from "../colors/Colors";
import styled, { css } from "styled-components";
import RemCalculator from "../RemCalculator";

const sharedProperties = (css)`
    border: none;
    outline: none;
    background-color: inherit;
    font-family: inherit;
    cursor: pointer;
    padding: ${RemCalculator(8)} ${RemCalculator(24)};
`;

const Primary = styled.button`
    ${sharedProperties};
    background-color: ${Colors.LightBlue};
    color: ${Colors.White};
    font-size: 30px;
    padding: 1rem
`
const Secondary = styled.button`
    ${sharedProperties};
    background-color:;
    color: ${Colors.White};
    border: 1px solid ${Colors.White};
    padding: 1rem;
    font-size: 30px
`

const Utility = styled.button`
${sharedProperties};
color: ${Colors.White};
border: 1px solid ${Colors.White};
background-color: ${Colors.Red};
padding: 1rem;
font-size: 15px

`

;

    

export {Primary, Secondary, Utility}
     
