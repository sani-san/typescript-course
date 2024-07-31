import { type ReactNode, type FC } from "react";

interface Props {
    image: { src: string, alt: string };
    children: ReactNode;
}

const Header: FC<Props> = ({ image, children }) => {
    return (
        <header>
            <img {...image} />
            {children}
        </header>
    )
}

export default Header;