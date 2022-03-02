import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { PageTitle } from "../../../components/PageTitle";
import Dashboard from "../../../layouts/Dashboard";
import { ProductionDTO } from "../../../dtos/production";
import "./styles.scss";
import { DateInput } from "../../../components/DateInput";
import { getPositions } from "../../../services/api/settings";

const initialState = {
  amount: undefined,
  date: "",
  position: "",
};

const positions = getPositions();

export const Production = () => {
  const { state } = useLocation();
  const [production, setProduction] = useState<ProductionDTO>(
    state || initialState
  );
  const mode = state.amount ? "Editar" : "Cadastrar";
  const navigate = useNavigate();
  const handleChange = (event: ProductionDTO) => {
    const newProduction = {
      ...event,
    };

    setProduction(newProduction);
  };

  return (
    <div className="production-page">
      <Dashboard>
        <div>
          <PageTitle title={`${mode} produção`} />
          <form action="" className="worker-page__form">
            <FormControl>
              <TextField
                label={"Quantidade"}
                value={production?.amount}
                onChange={(e) =>
                  handleChange({
                    ...production,
                    amount: parseInt(e.target.value),
                  })
                }
                required
              />
            </FormControl>
            <FormControl>
              <DateInput
                value={production?.date || new Date()}
                onChange={(value) =>
                  handleChange({ ...production, date: value })
                }
              />
            </FormControl>
            <FormControl required>
              <InputLabel id="demo-simple-select-label">Função</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={production?.position}
                label="Localidade"
                onChange={(e) =>
                  handleChange({ ...production, position: e.target.value })
                }
              >
                {positions.map((position) => (
                  <MenuItem value={position.name}>{position.name}</MenuItem>
                ))}
              </Select>
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
