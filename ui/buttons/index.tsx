import Button from "@mui/material/Button";
import { Menu, MenuItem, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

////Props para botones
//////
///
type myProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type PropsButtonMenu = {
  children: React.ReactNode;
  item1: string;
  item2: string;
  redirectLanguageEN: string;
};

function ButtonOutlined({
  children,
  className,
  onClick,
  type = "button",
}: myProps) {
  return (
    <Button
      className={className}
      variant="outlined"
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}

function NormalButton({
  children,
  className,
  onClick,
  type = "button",
}: myProps) {
  return (
    <Button
      className={className}
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}

export const MyButtonOutlined = styled(ButtonOutlined)`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  width: 102px;
  height: 40px;
  font-size: 18px;
  color: #170f49;
  border-color: #170f49;
  text-transform: none;
`;

export const MyButton = styled(NormalButton)`
  background-color: #fadcb1;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  width: 300px;
  height: 78px;
  font-size: 30px;
  box-shadow: none;
  border-radius: 10px;
  color: #170f49;
  text-transform: none;
`;

export const MyButtonSmall = styled(NormalButton)`
  background-color: #fadcb1;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  width: 130;
  height: 47px;
  font-size: 20px;
  box-shadow: none;
  border-radius: 10px;
  color: #170f49;
  text-transform: none;
`;

export const MyButtonSmallBlue = styled(NormalButton)`
  background-color: #170f49;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  width: 130;
  height: 47px;
  font-size: 20px;
  box-shadow: none;
  border-radius: 10px;
  color: white;
  text-transform: none;
`;
////////////   Botton Desplegable idiomas ES-EN    ////////////
////////                                            ////////
/////                                                  /////

export function MenuButtonLanguage({
  children,
  item1,
  item2,
  redirectLanguageEN,
}: PropsButtonMenu) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect1 = () => {
    setAnchorEl(null);
    router.push(redirectLanguageEN);
  };

  return (
    <div>
      {/* Botón que abre el menú */}
      <Button
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          color: "black",
        }}
      >
        {children}
      </Button>

      {/* Menú desplegable */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          {item1 ? <MenuItem onClick={handleRedirect1}>{item1}</MenuItem> : ""}
        </div>
        <div>
          {item2 ? <MenuItem onClick={handleRedirect1}>{item2}</MenuItem> : ""}
        </div>
      </Menu>

      {/* IconButton alternativa con un icono */}
      <IconButton
        aria-label="more"
        aria-controls={open ? "icon-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      ></IconButton>
    </div>
  );
}
