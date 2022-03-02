import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import SideBySide from '../../layouts/SideBySide';
import './styles.scss';

function Login() {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="login-template">
      <SideBySide
        left={
          <div className="banner"></div>
        }
      >
        <div className="content">
          <form>
            <Typography variant="h5" component="div" className="title">Login</Typography>
            <Input
              icon={<AccountCircle />}
              label="Usuário"
              value={user}
            />
            <Input
              icon={<VpnKeyIcon />}
              label="Senha"
              value={password}
            />
            <Button
              href="/home"
              label="Entrar"
              loading={false}
            />
          </form>
          <div className='is-new-here'>
            <div>
              <span>Novo por aqui?</span>
              <Link to={"/signup"}>Crie uma conta</Link>
            </div>
          </div>
        </div>
      </SideBySide>
    </div>
  )
}

export default Login;
