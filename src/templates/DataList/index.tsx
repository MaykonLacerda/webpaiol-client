import { Tooltip } from "@mui/material";
import React from "react";
import { ItemCard } from "../../components/ItemCard";

import "./styles.scss";

interface Props {
  data: any;
  handleProps: (row: any) => {
    title?: string;
    description?: string;
    info?: string;
    actions?: any;
  };
  headActions?: any;
}

export const DataListTemplate = ({ data, handleProps, headActions }: Props) => {
  return (
    <div className="data-list-template">
      <div className="top-actions">
        {headActions?.map((actions: any, index: number) => {
          return (
            <div key={index} onClick={actions.handle}>
              <Tooltip title={actions.label}>{actions.icon}</Tooltip>
            </div>
          );
        })}
      </div>
      <div>
        {data.map((result: any, index: number) => {
          const { title, description, info, actions } = handleProps(result);

          return (
            <div key={index}>
              <ItemCard
                title={title || "..."}
                description={description}
                info={info}
                actions={actions}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
