import styled from "styled-components";
import { Colors } from "../colors/Colors";

const Header = styled.h1<{
    color?: string;
    fontSize?: number;
    textTransform?: string;
}>`
    color: ${props => props.color ? props.color : Colors.Black};
    font-size: ${props => props.fontSize ? props.fontSize : 64}px;
    text-transform: ${props => props.textTransform && props.textTransform};
`;

const HeaderAux = styled.h3<{
    color?: string;
    fontSize?: number;
    textTransform?: string;
    mobileFontSize?: number;
}>`
    color: ${props => props.color ? props.color : Colors.Black};
    font-size: ${props => props.fontSize ? props.fontSize : 48}px;
    text-transform: ${props => props.textTransform && props.textTransform};
    @media screen and(max-width: 768px) {
        font-size: ${props => props.mobileFontSize && props.mobileFontSize}
    }
`;

const Body = styled.p<{
    color?: string;
    fontSize?: number;
    textTransform?: string;
}>`
    color: ${props => props.color ? props.color : Colors.Black};
    font-size: ${props => props.fontSize ? props.fontSize : 32}px;
    text-transform: ${props => props.textTransform && props.textTransform};
`;

const Caption = styled.p<{
    color?: string;
    fontSize?: number;
    textTransform?: string;
}>`
    color: ${props => props.color ? props.color : Colors.Black};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    text-transform: ${props => props.textTransform && props.textTransform};
`;

export {
    Header,
    HeaderAux,
    Body,
    Caption
}