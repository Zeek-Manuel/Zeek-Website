import styled from "styled-components";

const PaddingWrapper = styled.div<{
    padding? : number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
}>`
    padding: ${props => props.padding && props.padding}px;
    padding-top: ${props => props.paddingTop && props.paddingTop}px;
    padding-left: ${props => props.paddingLeft && props.paddingLeft}px;
    padding-right: ${props => props.paddingRight && props.paddingRight}px;
    padding-bottom: ${props => props.paddingBottom && props.paddingBottom}px;
`

export {
    PaddingWrapper
}