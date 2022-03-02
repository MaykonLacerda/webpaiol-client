import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './styles.scss';

interface IBackTo {
  to: string;
}

export const BackButton = (props: IBackTo) => {
  return (
    <div className='back-to'>
      <Link to={props.to}><ArrowBackIcon className="icon" cursor="pointer" /></Link>
    </div>
  )
}
