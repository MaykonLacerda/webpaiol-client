import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

interface BoxButtonProps {
  desc: string;
  icon: JSX.Element;
  link: string;
}

export const BoxButton = (props: BoxButtonProps) => {
  return (
    <NavLink style={{ textDecoration: "none" }} to={props.link}>
      <div className="box-button">
        <div className="icon">{props.icon}</div>
        <div className="desc">{props.desc}</div>
      </div>
    </NavLink>
  );
};
