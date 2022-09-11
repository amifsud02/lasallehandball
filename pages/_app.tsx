import { AppProps } from 'next/app'

// CSS Imports from styles

import '../styles/global.css'
import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/Nav.css'
import '../styles/Hero.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp