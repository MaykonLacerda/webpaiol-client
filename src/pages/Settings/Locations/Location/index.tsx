import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PageTitle } from "../../../../components/PageTitle";
import { LocationDTO } from "../../../../dtos/location";
import Dashboard from "../../../../layouts/Dashboard";
import "./styles.scss";

const initialState = {
  name: ""
}

export const Location = () => {
  const { state } = useLocation();
  const [location, setLocation] = useState<LocationDTO>(state || initialState);
  const mode = state ? "Editar" : "Cadastrar";
  const navigate = useNavigate();

  const handleChange = (event: LocationDTO) => {
    const newLocation = {
      ...event,
    };

    setLocation(newLocation);
  };

  return (
    <div className="location-page">
      <Dashboard>
        <div className="content">
          <PageTitle title={`${mode} localidade`} />
          <form action="" className="location-page__form">
            <FormControl>
              <TextField
                label={"Nome da localidade"}
                value={location?.name}
                onChange={(e) =>
                  handleChange({ ...location, name: e.target.value })
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
