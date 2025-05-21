import React from 'react'
import Header from './Header';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const params = useParams()
    console.log(params);
    
    
  return (
    <>
    <h1>Contact Us</h1>
    </>
  )
}

export default Contact