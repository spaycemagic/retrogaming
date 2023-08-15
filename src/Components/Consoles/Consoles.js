import React from 'react';
import './Consoles.css';
import gbac from './gbac.svg'
import ds from './ds.svg'
import psp from './psp.svg'


const Consoles = () => (
  <div className="consoles">
    <img alt="gbacolor" src={gbac} />
    <img alt="nintends" src={ds} />
    <img alt="playsp" src={psp} />
  </div>
)



export default Consoles;