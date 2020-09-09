import Layout from '../components/Layout'

export default function ExperienceEditor (props) {
  return (
    <div>
      {props && props.sitecore && props.sitecore.route
        ? <Layout route={props.sitecore.route} />
        : <h2>Page Not Found</h2>}
    </div>
  )
}

export async function getServerSideProps (context) {
  const body = context.req.body
  console.log('getServerSideProps', JSON.stringify(body, null, 2))

  return Array.isArray(body.args) && body.args.length > 1
    ? { props: JSON.parse(body.args[1]) }
    : { props: {} }
}
