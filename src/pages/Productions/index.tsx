import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { PageTitle } from "../../components/PageTitle";
import Dashboard from "../../layouts/Dashboard";
import { DataListTemplate } from "../../templates/DataList";
import { handleName, handleDate } from "../../utils/mask";
import "./styles.scss";

export const Productions = () => {
  const {
    state,
    state: { production, name },
  } = useLocation();
  const navigate = useNavigate();
  const { reducedName } = handleName(name);

  const handleData = (data: any) => {
    const state = {
      amount: data.amount,
      date: handleDate(data.date),
      position: data.position,
    };

    return {
      title: `Quantidade: ${data.amount}`,
      description: `${data.date}`,
      info: `Função: ${data.position}`,
      actions: [
        {
          label: "Editar",
          icon: <EditIcon />,
          handleClick: () => navigate("/production", { state }),
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
    <div className="production-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={reducedName} />
          <DataListTemplate
            data={production}
            handleProps={handleData}
            headActions={[
              {
                icon: <AddCircleIcon fontSize="large" />,
                label: "Criar",
                handle: () =>
                  navigate("/production", {
                    state: { position: state?.position },
                  }),
              },
            ]}
          />
        </div>
      </Dashboard>
    </div>
  );
};
