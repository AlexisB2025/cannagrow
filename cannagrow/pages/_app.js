import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }){
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const t = localStorage.getItem('theme') || 'dark';
      document.body.setAttribute('data-theme', t);
    }
  },[]);

  return <Component {...pageProps} />
}

export default MyApp;
