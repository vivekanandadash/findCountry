import React from 'react'
import Header from './Header';
import { useParams } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Contact = () => {
    const params = useParams()
    const [isDark] = useTheme()
    console.log(params);
    
    
  return (
    <>
    <main className={`${isDark?'dark':''}`}>
      <h1>Contact Us</h1>
    </main>
    
    </>
  )
}

export default Contact