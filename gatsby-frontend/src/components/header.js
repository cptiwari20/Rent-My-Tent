import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: ``,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
     style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        color: '#000000a1',
        padding: '10px',
        fontSize: 'larger',
      }}
        >
        About
    </Link>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        color: '#000000a1',
        padding: '10px',
        fontSize: 'larger',
      }}
    >
      Sign Up
    </Link>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        color: '#000000a1',
        padding: '10px',
        fontSize: 'larger',
      }}
    >
      Sign In
    </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
