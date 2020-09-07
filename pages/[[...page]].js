import axios from 'axios'
import Layout from '../components/Layout'

export default function Home (props) {
  return (
    <div>
      {props && props.sitecore && props.sitecore.route
        ? <Layout route={props.sitecore.route} />
        : <h2>Page Not Found</h2>
      }
    </div>
  )
}

export async function getStaticProps (context) {
  const {
    SITECORE_ENDPOINT,
    SITECORE_API_KEY
  } = process.env

  const itemPath = context.params && Array.isArray(context.params.page)
    ? '/' + context.params.page.join('/')
    : '/'

  return axios.get(`${SITECORE_ENDPOINT}?lang=en&sc_apikey=${SITECORE_API_KEY}&item=${itemPath}&sc_lang=en`)
    .then(response => response.data)
    .then(data => {
      console.log(data)
      return {
        props: data,
        revalidate: 1
      }
    })
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { page: ['styleguide'] } }
    ],
    fallback: true
  }
}
