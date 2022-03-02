import React from 'react';
import { Box, FormControl, TextField } from '@mui/material';

import { IInput } from './index.d';
import './styles.scss';

export const Input = (props: IInput) => {
  return (
    <div className='input-component'>
      <FormControl>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Box sx={{ mr: 1.5, my: 0.5 }}>
            {props.icon}
          </Box>
          <TextField
            className="input-field"
            id="input-with-sx"
            required
            type={props.type}
            label={props.label}
            variant={props.variant ? props.variant : "standard"}
            value={props.value}
            onChange={props.handle}
          />
        </Box>
      </FormControl>
    </div>
  )
}
