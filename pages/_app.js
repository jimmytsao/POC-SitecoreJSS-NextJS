import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import './../styles/app.css'

import { SitecoreContextFactory, SitecoreContext } from '@sitecore-jss/sitecore-jss-react'
import componentFactory from './../components/componentFactory'
const contextFactory = new SitecoreContextFactory()

function MyApp ({ Component, pageProps }) {
  return (
    <SitecoreContext componentFactory={componentFactory} contextFactory={contextFactory}>
      <Component {...pageProps} />
    </SitecoreContext>
  )
}

export default MyApp
