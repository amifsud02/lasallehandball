import '/styles/globals.css'
import '/components/Navbar/navbar.css'
import '/styles/Hero.css'
import '/pages/404/404_styles.css'
import '/styles/responsive.css'
import '/styles/matches.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
