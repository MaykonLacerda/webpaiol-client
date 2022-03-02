import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";

import "./styles.scss";

interface Props {
  title?: string;
  description?: string;
  reference?: string;
}

export const InfoModal = ({ title, description, reference }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className="confirm-modal">
        <div className="confirm-modal__head">
          <h3>{title || "Atenção"}</h3>
        </div>
        <div className="confirm-modal__content">
          <p>
            {description ||
              "Ocorreu algo errado. Tente novamente ou entre em contato com o suporte."}
          </p>
          <div className="confirm-modal__content__buttons">
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpen(false)}
            >
              Ok
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
