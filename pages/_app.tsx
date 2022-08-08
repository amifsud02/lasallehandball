//import '../styles/undermaintanence.css'

import '../styles/globals.css'
import '../styles/Hero.css'
import '../styles/matches.css'
import '../styles/responsive.css'
import '../styles/Home.module.css'
import '../styles/Nav.css'
import '../styles/Footer.css'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp