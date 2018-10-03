import React from 'react'
import { Helmet } from 'react-helmet'
import { path } from 'ramda'

const Meta = props => {
  const { data = {} } = props

  const siteURL = 'https://www.unstyled.io'

  // If title is not provided the default title from helmet will be used.
  const title = data.name || null
  const description =
    path(['summary', 'summary'], data) ||
    path(['description', 'childMarkdownRemark', 'excerpt'], data) ||
    path(['description'], data) ||
    'Luxury shopping'
  const slug = data.slug || ''

  let schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: siteURL,
    name: title,
  }

  return (
    <Helmet defaultTitle="Unstyled" titleTemplate="%s | Unstyled">
      <html lang="en" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={title} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      {/*<meta name="og:image" content={logo} />*/}
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@unstyled" />
      {/*<meta name="twitter:image" content={logo} />*/}
      <link rel="canonical" href={`${siteURL}/${slug}`} />
      {/*<link rel="image_src" href={logo} />*/}
    </Helmet>
  )
}

export default Meta
