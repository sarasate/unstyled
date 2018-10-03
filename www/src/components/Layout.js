import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Heading, Sidebar, Menu } from 'unstyled'

import Header from './Header'
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
        <Sidebar as={Menu} vertical>
          <Menu.Item as={Link} to="/">
            Unstyled
          </Menu.Item>
          <Menu.Item as={Heading} level={2}>
            Core
          </Menu.Item>
          <Menu.Item as={Link} to="/core/button">
            Button
          </Menu.Item>
        </Sidebar>
        <div style={{ marginLeft: 250, padding: '1rem' }}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
