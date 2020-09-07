import React from 'react'
import NextLink from 'next/link'
import { withSitecoreContext, Text, RichText } from '@sitecore-jss/sitecore-jss-react'

// this fancy destructure syntax is essentially equivalent to
// const fields = props.sitecoreContext.route.fields
const StyleguideCustomRouteType = ({
  sitecoreContext: {
    route: { fields }
  }
}) => (
  <div data-e2e-id='styleguide-customroutetype'>
    <Text tag='h3' field={fields.headline} />

    <p>
      <em>
        By <Text field={fields.author} />
      </em>
    </p>

    <RichText field={fields.content} />

    <NextLink href='/styleguide'>Return to the Styleguide</NextLink>
  </div>
)

// withSitecoreContext() is the magical glue that gives you route-level context access
// see the context examples in the styleguide for more details.
export default withSitecoreContext()(StyleguideCustomRouteType)
