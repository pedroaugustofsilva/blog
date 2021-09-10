import React from 'react'
import { Link } from 'gatsby'
import * as styles from './index.module.css'

import { rhythm } from '../../utils/typography'

import Menu from '../Menu'

class Layout extends React.Component {
  render() {
    const { location, config, children, translations } = this.props

    return (
      <div>
        <Menu lang={config.frontmatter.language} translations={translations} />
        <main
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
