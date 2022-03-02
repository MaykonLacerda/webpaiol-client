import React from "react";
import BadgeIcon from "@mui/icons-material/Badge";
import { BoxButton } from "../../components/BoxButton";
import Dashboard from "../../layouts/Dashboard";

import "./styles.scss";
import { PageTitle } from "../../components/PageTitle";

export const Settings = () => {
  return (
    <div className="settings-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={"Configurações"} />
          <div className="settings-options">
            <BoxButton
              desc={"Configurar Cargos"}
              icon={<BadgeIcon />}
              link={"/positions"}
            />
            <BoxButton
              desc={"Configurar Localidades"}
              icon={<BadgeIcon />}
              link={"/locations"}
            />
          </div>
        </div>
      </Dashboard>
    </div>
  );
};
