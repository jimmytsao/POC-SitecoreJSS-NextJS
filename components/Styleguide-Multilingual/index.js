import React from 'react'
import { Text } from '@sitecore-jss/sitecore-jss-react'
import NextLink from 'next/link'
import StyleguideSpecimen from '../Styleguide-Specimen'

/**
 * Demonstrates using the dictionary functionality and defining route data in
 * multiple languages.
 */
const StyleguideMultilingual = (props) => (
  <StyleguideSpecimen {...props} e2eId='styleguide-multilingual'>
    <Text field={props.fields.sample} encode={false} tag='p' />

    <p>
      This is a static dictionary entry from <code>/data/dictionary</code>:&nbsp;{
        'styleguide-sample'
      }
    </p>

    <p>
      <NextLink href='/en/styleguide'>Show in English</NextLink>
      <br />
      <NextLink href='/da-DK/styleguide'>Show in Danish</NextLink>
    </p>

    <p>The current language is:</p>
  </StyleguideSpecimen>
)

// the withTranslation() _higher order component_ wraps the
// component in another component and injects the `i18n`
// and `t` props into it so that we can use them for translation.
// Any component that wants to use translation will need to use this,
// or the react-i18next render props API. See the react-i18next docs for more details.
export default StyleguideMultilingual
