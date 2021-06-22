import { render } from '@testing-library/react';
import React from 'react';
import IdCard from './IdCard';

function Greetings(props){
    var messages = "";
    switch(props.lang){
        case 'de':
          messages='hallo';
          break;
        case 'fe':
            messages= 'bonjour';
            break;
        case 'es':
            messages= 'hola';
          break;
          case 'en':
          messages= 'hello';
          break;
        default:
          console.log(`Error 404.`);
      }
    return <div>
        {messages} {props.children}
    </div>
}



export default Greetings