module.exports = {
  webpack5: false,
  env: {
    OKTA_CLIENTID: process.env.OKTA_CLIENTID,
    OKTA_CLIENTSECRET: process.env.OKTA_CLIENTSECRET,
    OKTA_DOMAIN: process.env.OKTA_DOMAIN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  }
}
