module.exports = {
  webpack5: false,
  env: {
    OKTA_CLIENTID: process.env.OKTA_CLIENTID,
    OKTA_CLIENTSECRET: process.env.OKTA_CLIENTSECRET,
    OKTA_DOMAIN: process.env.OKTA_DOMAIN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
  }
}
