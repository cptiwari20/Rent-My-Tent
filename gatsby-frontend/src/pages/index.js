import React from "react"
import { Link } from "gatsby"
import { TextField } from '@material-ui/core'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="App-header">
        <h2>
         Sell your Tent.
        </h2>
        <h2>
         Look for a Tent.
        </h2>
        <p>A rental marketplace for used tents.</p>
        <TextField />
      </header>
  </Layout>
)

export default IndexPage
