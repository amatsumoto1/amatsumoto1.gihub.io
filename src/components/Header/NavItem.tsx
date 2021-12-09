import React from "react";

type NavItemProps = {
    link: string,
    text: string,
}

const NavItem: React.VFC<NavItemProps> = (props: NavItemProps) => {
    return (
        <li className="header-nav__item">
            <a href={props.link}>
                {props.text}
            </a>
        </li>
    )
}

NavItem.defaultProps = {
    link: '#'
};

export default NavItem;