import React from "react";
import { Link } from "react-router-dom"

type NavItemProps = {
  link: string,
  text: string,
}

const NavItem: React.VFC<NavItemProps> = (props: NavItemProps) => {
  const { link, text } = props;

  const onLinkClicked = (e: React.MouseEvent) => {
    // Prevent the background canvas from reacting to clicking on link.
    e.stopPropagation();
  }

  return (
    <li className="header-nav__item">
      <Link to={link} onClick={onLinkClicked}>
        {text}
      </Link>
    </li>
  );
}

export default NavItem;