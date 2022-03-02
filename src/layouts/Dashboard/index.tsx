import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { IDashboard, IOptions } from "./index.d";
import "./styles.scss";
import { Link } from "react-router-dom";
import { options } from "./routeOptions";

function Dashboard({ children }: IDashboard) {
  const [menuWidth, setMenuWidth] = useState<"compact" | "expansive">(
    "compact"
  );

  return (
    <div className="dashboard-layout">
      <div className={`menu ${menuWidth}`}>
        <div className="menu-icon">
          <MenuIcon
            onClick={() =>
              setMenuWidth(menuWidth === "compact" ? "expansive" : "compact")
            }
          />
        </div>
        <div className="menu-content">
          <List className="menu-options-list">
            {options.map((option: IOptions, index) => {
              return (
                <div key={index}>
                  <Link to={option.link}>
                    <ListItem button key={option.label}>
                      <ListItemIcon className="menu-options-icon">
                        {option.icon}
                      </ListItemIcon>
                      <ListItemText
                        className="menu-options-text"
                        primary={option.label}
                      />
                    </ListItem>
                  </Link>
                </div>
              );
            })}
          </List>
        </div>
      </div>
      <div className="right">{children}</div>
    </div>
  );
}

export default Dashboard;
