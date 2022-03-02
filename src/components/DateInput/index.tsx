import React from "react";
import {
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import './styles.scss';

interface Props {
  value: any;
  onChange: (e: any) => any;
}

export const DateInput = ({ value, onChange }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="date-input">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {width < 900 ? (
          <MobileDatePicker
            label="Data"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={(e) => onChange(e)}
            renderInput={(params) => <TextField {...params} required/>}
          />
        ) : (
          <DesktopDatePicker
            label="Data"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={(e) => onChange(e)}
            renderInput={(params) => <TextField {...params} required/>}
          />
        )}
      </LocalizationProvider>
    </div>
  );
};
