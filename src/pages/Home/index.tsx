import React from "react";
import { NavLink } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { SubTitle } from "../../components/SubTitle";
import Dashboard from "../../layouts/Dashboard";
import {  OverviewsTemplate } from "../../templates/Overviews";

import "./styles.scss";

export const Home = () => {
  return (
    <main className="home-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={"Página inicial"} backOption={false} />
          <SubTitle text={"Visão geral"} />
          <OverviewsTemplate />
        </div>
      </Dashboard>
    </main>
  );
};
