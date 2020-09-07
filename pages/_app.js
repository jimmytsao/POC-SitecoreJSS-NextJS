import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import './../styles/app.css'

import { SitecoreContextFactory, SitecoreContext } from '@sitecore-jss/sitecore-jss-react'
import componentFactory from './../components/componentFactory'
const contextFactory = new SitecoreContextFactory()

function MyApp ({ Component, pageProps }) {
  return (
    <SitecoreContext componentFactory={componentFactory} contextFactory={contextFactory}>
      <h1>This was rendered by NextJS</h1>
      <Component {...pageProps} />
      <h2>JSON Received from Sitecore</h2>
      <pre>
        {JSON.stringify(pageProps, null, 2)}
      </pre>
    </SitecoreContext>
  )
}

export default MyApp
