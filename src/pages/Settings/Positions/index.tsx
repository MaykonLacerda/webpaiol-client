import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { PageTitle } from "../../../components/PageTitle";
import Dashboard from "../../../layouts/Dashboard";
import { getPositions } from "../../../services/api/settings";
import { DataListTemplate } from "../../../templates/DataList";

import "./styles.scss";

const positions = getPositions();

export const Positions = () => {
  const navigate = useNavigate();

  const handleData = (data: any) => {
    const state = data;

    return {
      title: data.name,
      description: `Unidade: ${data.unity}`,
      info: `Valor: ${data.amountPayment}`,
      actions: [
        {
          label: "Editar",
          icon: <EditIcon />,
          handleClick: () => navigate("/position", { state }),
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
    <div className="positions-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={"Cargos"} />
          <DataListTemplate
            data={positions}
            handleProps={handleData}
            headActions={[
              {
                icon: <AddCircleIcon fontSize={"large"} />,
                label: "Cadastrar",
                handle: () => navigate('/position'),
              },
            ]}
          />
        </div>
      </Dashboard>
    </div>
  );
};
