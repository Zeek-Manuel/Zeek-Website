
import { MouseEventHandler } from "react";
import {Primary, Secondary, Utility} from "./ButtonStyle";

type Props<T = number, S = string, V = "primary" | "secondary" | "utility"> = {
    variant: V;
    className?: S;
    onClick?: MouseEventHandler;
    type?: S | any;
    id?: S | T;
    children: React.ReactNode;
}

function Button ({
    variant,
    className,
    onClick,
    children,
    type,
    id
}:
Props<string>): JSX.Element {

    if(variant !== "utility") {
        switch(variant) {
            case "primary":
                return <Primary
                            className={className}
                            onClick={onClick}
                            type={type}
                            id={id}
                        >
                            {children}
                        </Primary>

            case "secondary":
                return <Secondary
                        className={className}
                        onClick={onClick}
                        >
                        {children}
                        </Secondary>
        }
    }

            return <Utility
                    className={className}
                    onClick={onClick}
                    >
                    {children}
                    </Utility>
}

export default Button;