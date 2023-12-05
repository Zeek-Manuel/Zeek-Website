import {
    Header,
    HeaderAux,
    Body,
    Caption
} from "./Typography.Styled";

type Props = {
    children: string;
    variant: "header" | "header-aux" | "body" | "caption";
    color?: string;
    fontSize?: number;
    textTransform?: string;
};

function Typography({
    children,
    variant,
    color,
    fontSize,
    textTransform
}: Props): JSX.Element {

    if(variant !== "caption") {
        switch(variant) {
            case "header":
                return <Header color={color} fontSize={fontSize} textTransform={textTransform}>{children}</Header>
            case "header-aux":
                return <HeaderAux color={color} fontSize={fontSize} textTransform={textTransform}>{children}</HeaderAux>

            default:
                return <Body color={color} fontSize={fontSize} textTransform={textTransform}>{children}</Body>
        }
    }

    return <Caption color={color} fontSize={fontSize} textTransform={textTransform}>{children}</Caption>
}

export default Typography;