import React from "react";
import { useNavigate } from "react-router-dom";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { PageTitle } from "../../components/PageTitle";
import Dashboard from "../../layouts/Dashboard";
import { getWorkers } from "../../services/api/worker";
import { DataListTemplate } from "../../templates/DataList";
import { handleName } from "../../utils/mask";
import { getTotalPayment } from "../../utils/handleGenerics";
import "./styles.scss";

const workers = getWorkers();
const totalPayment = getTotalPayment(workers);

export const Payments = () => {
  const navigate = useNavigate();

  const handleData = (data: any) => {
    const { reducedName } = handleName(data.name);
    const state = {
      name: data.name,
      production: data.production,
    };

    return {
      title: reducedName,
      description: data.payment,
      actions: [
        {
          label: "Pagar",
          icon: <PriceCheckIcon />,
          handleClick: () => null,
        },
        {
          label: "Ver produção",
          icon: <VisibilityIcon />,
          handleClick: () => navigate(`/productions`, { state }),
        },
      ],
    };
  };

  return (
    <div className="payments-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={"Pagamentos"} />
          <DataListTemplate
            data={workers}
            handleProps={handleData}
          />
        </div>
      </Dashboard>
    </div>
  );
};
