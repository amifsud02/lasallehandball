//import '../styles/undermaintanence.css'

import '../styles/globals.css'
import '../styles/Hero.css'
import '../styles/matches.css'
import '../styles/responsive.css'
import '../styles/Nav.css'
import '../styles/footer.css'

import { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
  }, []);

  return <Component {...pageProps} />
}

export default MyApp