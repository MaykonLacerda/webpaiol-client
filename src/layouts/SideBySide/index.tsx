import React from 'react'
import './styles.scss';
import { ISideBySide } from './index.d';

function SideBySide({ left, children }: ISideBySide) {
  return (
    <div className="side-by-side-layout">
      <div className="left">{left}</div>
      <div className="right">{children}</div>
    </div>

  )
}

export default SideBySide;
