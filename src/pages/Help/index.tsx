import React from "react";

import { PageTitle } from "../../components/PageTitle";
import Dashboard from "../../layouts/Dashboard";
import "./styles.scss";

export const Help = () => {
  return (
    <div className="help-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={"Ajuda"} />
        </div>
      </Dashboard>
    </div>
  );
};
