import { AppProps } from 'next/app'

// CSS Imports from styles

import '../styles/global.css'
import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/Nav.css'
import '../styles/Hero.css'
import '../styles/matches.css'
import '../styles/footer.css'
import '../styles/undermaintanence.css'
import '../styles/MiniGallery.css'
import '../styles/contact.css'
import '../styles/igrid.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp