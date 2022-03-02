import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import SideBySide from '../../layouts/SideBySide';

import './styles.scss';

export const LadingPage = () => {

  return (
    <main className='landing-page'>
      <SideBySide
        left={
          <div className="banner">
            Banner
          </div>
        }
      >
        <div className='content'>
          <Typography variant="h5" component="div" className="title">Seja bem-vindo!</Typography>
          <Button
            label="Faça login"
            href="/login"
            loading={false}
          />
          <span>ou</span>
          <Button
            label="Criar conta"
            href="/signup"
            loading={false}
          />
        </div>
      </SideBySide>
    </main>
  )
}
