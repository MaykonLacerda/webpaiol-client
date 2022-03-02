import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { PageTitle } from "../../components/PageTitle";
import Dashboard from "../../layouts/Dashboard";
import { DataListTemplate } from "../../templates/DataList";
import { getWorkers } from "../../services/api/worker";
import { handleName } from "../../utils/mask";
import { InfoModal } from "../../components/AlertsModal/";
import "./styles.scss";

const workers = getWorkers();

export const Workers = () => {
  const navigate = useNavigate();

  const handleData = (data: any) => {
    const { reducedName } = handleName(data.name);
    const state = data;

    return {
      title: reducedName,
      description: data.position,
      actions: [
        {
          label: "Adicionar produção",
          icon: <AddBoxIcon />,
          handleClick: () =>
            navigate("/production", { state: { position: data.position } }),
        },
        {
          label: "Ver produção",
          icon: <VisibilityIcon />,
          handleClick: () => navigate(`/productions`, { state }),
        },
        {
          label: "Editar",
          icon: <EditIcon />,
          handleClick: () => navigate("/worker", { state }),
        },
        {
          label: "Deletar",
          icon: <DeleteIcon />,
          handleClick: () => null,
        },
      ],
    };
  };

  return (
    <div className="workers-page">
      <Dashboard>
        <InfoModal />
        <PageTitle title={`Funcionários`} />
        <DataListTemplate
          data={workers}
          handleProps={handleData}
          headActions={[
            {
              icon: <AddCircleIcon fontSize={"large"} />,
              label: "Cadastrar",
              handle: () => navigate("/worker"),
            },
          ]}
        />
      </Dashboard>
    </div>
  );
};
