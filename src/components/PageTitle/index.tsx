import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

interface Props {
  title: string;
  backOption?: boolean;
}

export const PageTitle = ({ title, backOption = true  }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="page-title">
      <h2 className="title">{title}</h2>
      {backOption && <p onClick={() => navigate(-1)}>{"< voltar"}</p>}
    </div>
  );
};
