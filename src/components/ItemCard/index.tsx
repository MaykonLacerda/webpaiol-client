import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { ActionsProps, IAction, Props } from "./index.d";
import "./styles.scss";

const EnhancedMobileActions = ({ actions }: ActionsProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openAnchor = Boolean(anchorEl);

  return (
    <div className="mobile-actions">
      <IconButton
        disableRipple
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={openAnchor}
        onClose={() => {
          setAnchorEl(null);
        }}
        className="menu-list"
        PaperProps={{
          style: {
            maxHeight: "auto",
            width: "auto",
            padding: ".2rem",
            borderRadius: "8px",
          },
        }}
      >
        {actions?.map(({ label, icon, handleClick }: IAction, index) => {
          const handleMenuClick = () => {
            handleClick();
            setAnchorEl(null);
          };

          return (
            <div key={index}>
              <MenuItem
                className="menu-item"
                onClick={handleMenuClick}
                disableRipple
              >
                <div className="mobile-actions__item">
                  {icon}
                  {label}
                </div>
              </MenuItem>
            </div>
          );
        })}
      </Menu>
    </div>
  );
};

const EnhancedDesktopActions = ({ actions }: ActionsProps) => {
  return (
    <div className="desktop-actions">
      {actions?.map(({ icon, label, handleClick }: IAction, index: number) => (
        <div
          key={index}
          className="desktop-actions__button"
          onClick={handleClick}
        >
          <Tooltip title={label}>{icon}</Tooltip>
        </div>
      ))}
    </div>
  );
};

export const ItemCard = ({ title, description, info, actions }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="item-card">
      <div className="info">
        <p>{title}</p>
        <p>{description}</p>
        <p>{info}</p>
      </div>
      <div className="actions">
        {width < 800 ? (
          <div className="mobile">
            <EnhancedMobileActions actions={actions} />
          </div>
        ) : (
          <div className="desktop">
            <EnhancedDesktopActions actions={actions} />
          </div>
        )}
      </div>
    </div>
  );
};
