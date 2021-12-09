import React from "react";

type NavItemProps = {
    link: string,
    text: string,
}

const NavItem: React.VFC<NavItemProps> = (props: NavItemProps) => {
    const { link, text } = props;

    return (
        <li className="header-nav__item">
            <a href={link}>
                {text}
            </a>
        </li>
    )
}

export default NavItem;