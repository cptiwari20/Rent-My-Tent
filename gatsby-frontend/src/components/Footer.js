import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ link }) => (
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
          {link}
        </Link>
      </h1>
    </div>
)

Footer.propTypes = {
  link: PropTypes.string,
}

Footer.defaultProps = {
  link: ``,
}

export default Footer
