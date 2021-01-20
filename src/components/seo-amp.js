import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const SEOAMP = ({ title, description, image, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }
      return (
        <>
          <Helmet title={titleTemplate} titleTemplate={`%s | ${seo.title}`}>
            <doctype html />
            <html amp lang="en" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js"></link>
            <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
            <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
            <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>

          </Helmet>
        </>
      )
    }}
  />
)
export default SEOAMP
SEOAMP.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEOAMP.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEOAMP {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`