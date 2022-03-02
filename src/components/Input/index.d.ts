import { SvgIconTypeMap } from "@mui/material";

export interface IInput {
  icon?: JSX.Element;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  type?: string;
  value: string;
  handle?: (event?: any) => any;
}
