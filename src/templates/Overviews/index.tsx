import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getWorkers } from "../../services/api/worker";
import { handleLocations, handlePositions } from "../../utils/handleGenerics";
import "./styles.scss";

const workers = getWorkers();
const { names: locationNames, quantities: locationQuantities } =
  handleLocations(workers);
const { names: positionNames, quantities: positionQuantities } =
  handlePositions(workers);

ChartJS.register(ArcElement, Tooltip, Legend);

const positionChartData = {
  labels: positionNames,
  datasets: [
    {
      label: "# of Positions",
      data: positionQuantities,
      backgroundColor: ["#357ded", "#FF5A5F", "#3C3C3C", "#F5F5F5", "#C1839F"],
      borderWidth: 2,
    },
  ],
};

const locationChartData = {
  labels: locationNames,
  datasets: [
    {
      label: "# of Locations",
      data: locationQuantities,
      backgroundColor: ["#357ded", "#FF5A5F", "#3C3C3C", "#F5F5F5", "#C1839F"],
      borderWidth: 2,
    },
  ],
};


export const OverviewsTemplate = () => {
  return (
    <div className="overviews">
      <div className="overviews__workers">
        <div className="overviews__workers__quantity">
          <p>
            Funcionários: <span>{`${workers.length}`}</span>
          </p>
        </div>
        <div className="overviews__workers__charts">
          <p>Funções</p>
          <Doughnut data={positionChartData} />
        </div>
        <div className="overviews__workers__charts">
          <p>Localidades</p>
          <Doughnut data={locationChartData} />
        </div>
      </div>
      <div className="overviews__payments">
        <div>
          <p>Total produzido:</p>
        </div>
      </div>
    </div>
  );
};
