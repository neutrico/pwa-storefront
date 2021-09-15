import fetch from '../fetch'
import getAPIURL from '../api/getAPIURL'

/**
 * A convenience function to be used in `getInitialProps` to fetch data for the page from an
 * API endpoint at the same path as the page being requested.  So for example, when rendering
 * `/products/1`, this function will fetch data from `/api/products/1?__v__={__NEXT_DATA__.buildId}`.
 *
 * ```js
 * import fetchFromAPI from 'pwa-storefront/props/fetchFromAPI'
 * import createLazyProps from 'pwa-storefront/props/createLazyProps'
 *
 * Product.getInitialProps = createLazyProps(opts => {
 *   return fetchFromAPI(opts)
 * })
 * ```
 *
 * Or simply:
 *
 * ```js
 * Product.getInitialProps = createLazyProps(fetchFromAPI)
 * ```
 *
 * @param {Object} opts The options object provided to `getInitialProps`
 * @return {Promise} A promise that resolves to the data that the page should display
 */
export default function fetchFromAPI({ req, asPath, pathname }) {
  const host = req ? process.env.API_HOST || req.headers['host'] : ''

  //const protocol = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
  const protocol = 'https://';
  let uri = getAPIURL(asPath)
  console.log("protocol", protocol)
  console.log("host", host)
  console.log("URI", uri)
  console.log("pathname", pathname)
  let headers = {}

  if (req) {
    // on the server
    if (uri.indexOf('?') === -1) {
      uri = uri + '?_includeAppData=1'
    } else {
      uri = uri + '&_includeAppData=1'
    }

    headers = {
      ...req.headers,
      host: req.headers['host'],
      'x-next-page': `/api${pathname.replace(/\/$/, '')}`,
      cookie: req.headers.cookie,
    }
  }

  const url = `${protocol}${host}${uri}`
  console.log("URL", url)

  return fetch(url, { credentials: 'include', headers }).then(res => res.json())
}
