import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { PageTitle } from "../../../components/PageTitle";
import Dashboard from "../../../layouts/Dashboard";
import { DataListTemplate } from "../../../templates/DataList";
import { getLocations } from "../../../services/api/settings";
import "./styles.scss";

const locations: any[] = getLocations();

export const Locations = () => {
  const navigate = useNavigate();

  const handleData = (data: any) => {
    const state = data;

    return {
      title: data.name,
      actions: [
        {
          label: "Editar",
          icon: <EditIcon />,
          handleClick: () => navigate("/location", { state }),
        },
        {
          label: "Excluir",
          icon: <DeleteIcon />,
          handleClick: () => null,
        },
      ],
    };
  };

  return (
    <div className="locations-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={"Localidades"} />
          <DataListTemplate
            data={locations}
            handleProps={handleData}
            headActions={[
              {
                icon: <AddCircleIcon fontSize={"large"} />,
                label: "Cadastrar",
                handle: () => navigate('/location'),
              },
            ]}
          />
        </div>
      </Dashboard>
    </div>
  );
};
