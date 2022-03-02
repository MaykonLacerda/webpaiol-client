import React from 'react';
import { IButton } from './index.d';
import { Button as ButtonMUI, CircularProgress } from '@material-ui/core';
import { Box } from '@mui/material';


export const Button = (props: IButton) => {
  const handleClick = props.onClick ?? (() => { });
  return (
    <Box sx={{ my: 3 }}>
      <ButtonMUI
        href={props.href}
        size="large"
        variant="contained"
        color="primary"
        className="loadingButton"
        disabled={props.loading}
        startIcon={<>{props.loading ? <CircularProgress size={20} color={"inherit"} /> : props.icon}</>}
        onClick={handleClick}
        type={props.onClick ? 'button' : 'submit'}
      >
        {props.label}
      </ButtonMUI>
    </Box>
  )
}
