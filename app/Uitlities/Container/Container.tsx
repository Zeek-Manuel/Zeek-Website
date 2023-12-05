import { PaddingWrapper } from "./ContainerStyle";

type Props<T extends number, S extends React.ReactNode> = {
    children: S;
    padding?: T;
    paddingTop?: T;
    paddingLeft?: T;
    paddingRight?: T;
    paddingBottom?: T;
};

function Container({
    padding,
    paddingTop, 
    paddingLeft, 
    paddingRight, 
    paddingBottom,
    children
}: Props<number, any>): JSX.Element {
    return (
        <PaddingWrapper
            padding={padding}
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
        >
            {children}
        </PaddingWrapper>
    )
}

export default Container;