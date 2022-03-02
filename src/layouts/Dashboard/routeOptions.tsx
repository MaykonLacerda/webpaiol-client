import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

export const options = [
  {
    icon: <HomeIcon />,
    label: "Inicio",
    link: "/home"
  },
  {
    icon: <BsFillPersonBadgeFill />,
    label: "Funcionários",
    link: "/workers"
  },
  // {
  //   icon: <GiNotebook />,
  //   label: "Produções",
  //   link: "/productions"
  // },
  {
    icon: <FaMoneyCheckAlt />,
    label: "Pagamentos",
    link: "/payments"
  },
  {
    icon: <IoMdSettings />,
    label: "Configurações",
    link: "/settings"
  },
  {
    icon: <HelpIcon />,
    label: "Ajuda",
    link: "/help"
  },
  {
    icon: <ExitToAppIcon />,
    label: "Sair",
    link: "/login"
  },
]