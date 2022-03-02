import React from "react";

import "./styles.scss";

interface Props {
  text: string;
}

export const SubTitle = ({ text }: Props) => {
  return (
    <div className="sub-title">
      <h3 className="text">{text}</h3>
    </div>
  );
};
