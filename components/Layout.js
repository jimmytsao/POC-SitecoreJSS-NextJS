import React from 'react'
import { Placeholder } from '@sitecore-jss/sitecore-jss-react'
import NextLink from 'next/link'
import Head from 'next/head'
/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
const Navigation = ({ t, i18n }) => (
  <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom'>
    <h5 className='my-0 mr-md-auto font-weight-normal'>
      <NextLink href='/' className='text-dark'>
        <img src='/sc_logo.svg' alt='Sitecore' />
      </NextLink>
    </h5>
    <nav className='my-2 my-md-0 mr-md-3'>
      <a
        className='p-2 text-dark'
        href='https://jss.sitecore.net'
        target='_blank'
        rel='noopener noreferrer'
      >
        Documentation
      </a>
      <NextLink href='/styleguide' className='p-2 text-dark'>
        Styleguide
      </NextLink>
      <NextLink href='/graphql' className='p-2 text-dark'>
        GraphQL
      </NextLink>
    </nav>
  </div>
)

const Layout = ({ route }) => (
  <>
    <Head>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Head>

    <Navigation />

    {/* root placeholder for the app, which we add components to using route data */}
    <div className='container'>
      <Placeholder name='jss-main' rendering={route} />
    </div>
  </>
)

export default Layout
