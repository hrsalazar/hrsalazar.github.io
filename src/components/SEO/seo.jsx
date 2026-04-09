import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import siteConfig from '../../../data/siteConfig'

function SEO({ description, lang = 'en', meta = [], keywords = [], title }) {
  const metaDescription = description || siteConfig.siteDescription
  const fullTitle = title ? `${title} | ${siteConfig.siteTitle}` : siteConfig.siteTitle

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={fullTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: fullTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: siteConfig.twitterUsername || '@austrachilango',
        },
        {
          name: 'twitter:title',
          content: fullTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...(keywords.length > 0
          ? [
              {
                name: 'keywords',
                content: keywords.join(', '),
              },
            ]
          : []),
        ...meta,
      ]}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO
