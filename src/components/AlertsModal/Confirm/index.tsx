import React, { useEffect, useState } from "react";
import { Button, Dialog } from "@mui/material";

import "./styles.scss";

interface Props {
  open: boolean;
  title?: string;
  description?: string;
  reference?: string;
}

export const ConfirmModal = ({
  open,
  title,
  description,
  reference,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <Dialog open={openModal}>
      <div className="confirm-modal">
        <div className="confirm-modal__head">
          <h3>{title || "Confirmação"}</h3>
        </div>
        <div className="confirm-modal__content">
          <p>{description || "Tem certeza que seja realizar esta ação?"}</p>
          <span>{reference}</span>
          <div className="confirm-modal__content__buttons">
            <Button variant="contained" size="large">
              Confirmar
            </Button>
            <Button variant="contained" size="large">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
