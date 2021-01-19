import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, pathname }) => (
    // new
  <StaticQuery
    query={query}
    render={(data) => {
      const defaultTitle = data.allContentfulGlobalSettings ?
          data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultTitle') ?
              data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultTitle').node.value.value :
              data.site.siteMetadata.defaultTitle :
          data.site.siteMetadata.defaultTitle

      const defaultDescription = data.allContentfulGlobalSettings ?
          data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultDescription') ?
              data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultDescription').node.value.value :
              data.site.siteMetadata.defaultTitle :
          data.site.siteMetadata.defaultTitle

      const siteUrl = data.allContentfulGlobalSettings ?
          data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'siteUrl') ?
              data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'siteUrl').node.value.value :
              data.site.siteMetadata.defaultTitle :
          data.site.siteMetadata.defaultTitle

      const titleTemplate = data.allContentfulGlobalSettings ?
          data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultTitleTemplate') ?
              data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultTitleTemplate').node.value.value :
              data.site.siteMetadata.defaultTitle :
          data.site.siteMetadata.defaultTitle

      const defaultImage = data.allContentfulGlobalSettings ?
          data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultImage') ?
              data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'defaultImage').node.value.value :
              data.site.siteMetadata.defaultTitle :
          data.site.siteMetadata.defaultTitle

      const twitterUsername = data.allContentfulGlobalSettings ?
          data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'twitterUsername') ?
              data.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'twitterUsername').node.value.value :
              data.site.siteMetadata.defaultTitle :
          data.site.siteMetadata.defaultTitle

        const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            image: `${siteUrl}${image || defaultImage}`,
            url: `${siteUrl}${pathname || "/"}`,
        }
      // console.log('title**', title)
      // console.log('description**', description)
      // console.log('image**', image)
      // console.log('pathname**', pathname)

      return (
        <>
          <Helmet title={titleTemplate} titleTemplate={`%s | ${seo.title}`}>
            <html lang="en" />
            <meta charset="utf-8"/>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta name="viewport" content="width=device-width" minimum-scale="1" initial-scale="1"/>
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

          </Helmet>
        </>
      )
    }}
  />
)
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEO {
    allContentfulGlobalSettings(filter: {codeId: {in: [
    "defaultTitle",
		"defaultDescription",
		"siteUrl",
		"defaultTitleTemplate",
		"defaultImage",
		"twitterUsername"
  ]}}){
    edges {
      node {
        codeId
        value {
          value
        }
      }
    }
  }
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
