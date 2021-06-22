import { render } from '@testing-library/react';
import React from 'react';
import IdCard from './IdCard';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

Function Randomnumber(props){
    return <div>
  {getRandomInt}{props.children}
    </div>

}

export default Randomnumber