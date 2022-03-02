import { FormControl, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import SideBySide from '../../layouts/SideBySide';

import './styles.scss';

export const CreateAccount = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");

  return (
    <div className="sign-up">
      <SideBySide
        left={
          <div className="banner"></div>
        }
      >
        <div className="content-signup">
          <form action="" className='signup-form'>
            <Typography variant="h5" component="div" className="title">Criar conta</Typography>
            <FormControl>
              <Input
                label="Nome completo"
                value={nomeCompleto}
                handle={(e) => setNomeCompleto(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                label="CPF"
                value={nomeCompleto}
                handle={(e) => setNomeCompleto(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                label="E-mail"
                type="email"
                value={nomeCompleto}
                handle={(e) => setNomeCompleto(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                label="Data de nascimento"
                value={nomeCompleto}
                handle={(e) => setNomeCompleto(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input   
                label="Senha"
                value={nomeCompleto}
                handle={(e) => setNomeCompleto(e.target.value)}
                type="password"
              />
            </FormControl>
            <FormControl>
              <Input
                label="Confirmar senha"
                value={nomeCompleto}
                handle={(e) => setNomeCompleto(e.target.value)}
                type="password"
              />
            </FormControl>
            <Button
              label="Cadastrar"
              loading={false}
            />
          </form>
          <div className='signin'>Possui um conta? <Link to={"/login"}>Faça login aqui</Link></div>
        </div>
      </SideBySide>
    </div>
  )
}