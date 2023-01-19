import React from 'react'
import { useParams } from "react-router";
import Word from './Word';
import Number from './Number';

function Value() {

  // deconstructs value from Route path 
  const {value} = useParams(); 


  // checking if value is a number or not and returning a boolean 
  if (isNaN(value)) {
    return <Word value={value} />
  } else {
    return <Number value={value} />
  }


}

export default Value