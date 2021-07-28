import Client from 'shopify-buy'

export default shopifyClient = () => Client.buildClient({
    domain: process.env.SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.SHOPIFY_TOKEN,
})