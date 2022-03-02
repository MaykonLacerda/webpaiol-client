import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { PageTitle } from "../../../components/PageTitle";
import { WorkerDTO } from "../../../dtos/worker";
import { PositionDTO } from "../../../dtos/position";
import { LocationDTO } from "../../../dtos/location";
import Dashboard from "../../../layouts/Dashboard";
import { getLocations, getPositions } from "../../../services/api/settings";
import "./styles.scss";

const initialState: WorkerDTO = {
  name: "",
  position: "",
  location: "",
  phone: undefined,
};
const positions: PositionDTO[] = getPositions();
const locations: LocationDTO[] = getLocations();

export const Worker = () => {
  const { state } = useLocation();
  const [worker, setWorker] = useState<WorkerDTO>(state || initialState);
  const mode = state ? "Atualizar" : "Cadastrar";
  const navigate = useNavigate();

  const handleChange = (event: WorkerDTO) => {
    const newWorker = {
      ...event,
    };

    setWorker(newWorker);
  };

  const handleDontData = (data: any, link: string, text?: string) => {
    const textField = text ? text : "dados cadastrados";

    if (!data.length) {
      Swal.fire({
        html: `<p>Ainda não existem <strong style="color: #357DED">${textField}</strong>.</br> Deseja cadastrar agora?!</p>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#357DED",
        confirmButtonText: "Ir",
      }).then((result) => {
        if (result.isConfirmed) return navigate(link);
      });
    }
  };

  return (
    <div className="worker-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={`${mode} funcionário`} />
          <form action="" className="worker-page__form">
            <FormControl>
              <TextField
                label={"Nome completo"}
                value={worker.name}
                onChange={(e) =>
                  handleChange({ ...worker, name: e.target.value })
                }
                required
              />
            </FormControl>
            <FormControl
              required
              onClick={() =>
                handleDontData(positions, "/positions", "cargos cadastrados")
              }
            >
              <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={worker?.position}
                label="Cargo"
                onChange={(e) =>
                  handleChange({ ...worker, position: e.target.value })
                }
              >
                {positions.map((position) => (
                  <MenuItem value={position.name}>{position.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              required
              onClick={() =>
                handleDontData(locations, "/locations", "localidades cadastradas")
              }
            >
              <InputLabel id="demo-simple-select-label">Localidade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={worker?.location}
                label="Localidade"
                onChange={(e) =>
                  handleChange({ ...worker, location: e.target.value })
                }
              >
                {locations.map((location) => (
                  <MenuItem value={location.name}>{location.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                label={"Telefone"}
                value={worker?.phone}
                onChange={(e) =>
                  handleChange({ ...worker, phone: e.target.value })
                }
                placeholder={"Opcional"}
              />
            </FormControl>
            <FormControl className="buttons">
              <Button type="submit" variant="contained" size="large">
                {mode}
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate(-1)}
              >
                Cancelar
              </Button>
            </FormControl>
          </form>
        </div>
      </Dashboard>
    </div>
  );
};
