import React from "react";
import { Link } from "react-router-dom"

type NavItemProps = {
    link: string,
    text: string,
}

const NavItem: React.VFC<NavItemProps> = (props: NavItemProps) => {
    const { link, text } = props;

    return (
        <li className="header-nav__item">
            <Link to={link}>
                {text}
            </Link>
        </li>
    )
}

export default NavItem;