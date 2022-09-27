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

// Animate.css
import 'animate.css'
import { useState, useEffect, Fragment } from 'react'
import LoadingScreen from '../components/LoadingScreen/LoadingScreen'

function MyApp({ Component, pageProps }: AppProps) {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1750);
  // }, []);

  // return(
  //   <>
  //     {!loading ? (
  //       <Fragment>
  //         <Component {...pageProps} />
  //       </Fragment>
  //     ) : (
  //       <LoadingScreen></LoadingScreen>
  //     )}
  //   </>
    
  // )

  return <Component {...pageProps} />
}

export default MyApp