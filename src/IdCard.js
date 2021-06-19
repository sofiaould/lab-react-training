import { render } from '@testing-library/react';
import React from 'react';

function IdCard(props){
     return <div> 
         <p> first name: {props.firstName}</p>
         <p> last name: {props.lastName}</p>
         <p>gender: {props.gender}</p>
         <p> height: {props.height/100}m</p>
         <p>birth:{props.birth.toDateString()}</p>
         <img src={props.picture}/>
     </div>
 }




export default IdCard



