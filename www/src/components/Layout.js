import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SidebarMenu from './SidebarMenu'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate="%s | Unstyled"
          defaultTitle="Unstyled"
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'unstyled,react,ui,style' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <SidebarMenu />
        <div style={{ marginLeft: 250, padding: '1rem' }}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
