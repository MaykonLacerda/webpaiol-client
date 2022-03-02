import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PageTitle } from "../../../../components/PageTitle";
import { PositionDTO } from "../../../../dtos/position";
import Dashboard from "../../../../layouts/Dashboard";
import "./styles.scss";

const initialState = {
  name: "",
  unity: undefined,
  amountPayment: undefined
}

export const Position = () => {
  const { state } = useLocation();
  const [position, setPosition] = useState<PositionDTO>(state || initialState);
  const mode = state ? "Editar" : "Cadastrar";
  const navigate = useNavigate();

  const handleChange = (event: PositionDTO) => {
    const newPosition = {
      ...event,
    };

    setPosition(newPosition);
  };

  return (
    <div className="position-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={`${mode} cargo`} />
          <form action="" className="position-page__form">
            <FormControl>
              <TextField
                label={"Nome do cargo"}
                value={position?.name}
                onChange={(e) =>
                  handleChange({ ...position, name: e.target.value })
                }
                required
              />
            </FormControl>
            <FormControl>
              <TextField
                label={"Unidade"}
                value={position?.unity}
                onChange={(e) =>
                  handleChange({ ...position, unity: parseInt(e.target.value) })
                }
                required
              />
            </FormControl>
            <FormControl>
              <TextField
                label={"Valor por unidade"}
                value={position?.amountPayment}
                onChange={(e) =>
                  handleChange({ ...position, amountPayment: parseInt(e.target.value) })
                }
                required
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
