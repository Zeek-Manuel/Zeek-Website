import { PaddingWrapper } from "./Padding.Style";

type Props<T extends number, S extends React.ReactNode> = {
    children: S;
    paddingTop?: T;
    paddingLeft?: T;
    paddingRight?: T;
    paddingBottom?: T;
};

function Padding({
    paddingTop, 
    paddingLeft, 
    paddingRight, 
    paddingBottom,
    children
}: Props<number, any>): JSX.Element {
    return (
        <PaddingWrapper
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
        >
            {children}
        </PaddingWrapper>
    )
}

export default Padding;