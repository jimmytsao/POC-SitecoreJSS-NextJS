import React from 'react'
import NextLink from 'next/link'
import { withSitecoreContext, Text } from '@sitecore-jss/sitecore-jss-react'
import StyleguideSpecimen from '../Styleguide-Specimen'

/**
 * Demonstrates gaining access to route-level fields.
 * This technique builds on the Styleguide-SitecoreContext technique,
 * to also get the route level field data and make it editable.
 */
const StyleguideRouteFields = (props) => (
  <StyleguideSpecimen {...props} e2eId='styleguide-route-fields'>
    <p>
      Route level <code>pageTitle</code> field:{' '}
      {props.sitecoreContext.route && <Text field={props.sitecoreContext.route.fields.pageTitle} />}
    </p>
    <p>
      <NextLink href='/styleguide/custom-route-type'>Sample of using a custom route type</NextLink>
    </p>
  </StyleguideSpecimen>
)

export default withSitecoreContext()(StyleguideRouteFields)
