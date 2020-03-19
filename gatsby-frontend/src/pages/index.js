import React, {useState} from "react"
// import { Link } from "gatsby"
import { TextField, InputAdornment, Button } from '@material-ui/core'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  
  const [searchKeyword, setSearchKeyword] = useState('');

  return(
  <Layout>
    <SEO title="Home" />
    <div style={{
      paddingTop: '7rem'
    }}>
      <h2>
        Sell your Tent.
      </h2>
      <h2>
        Look for a Tent.
      </h2>
      <p>A rental marketplace for used tents.</p>
      <div
          style={{
            display: 'flex',
            width: '28vw',
            justifyContent: 'space-between',
            color: '#262555'
          }}>

          <TextField
            type='text'
            variant='outlined'
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value) }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                      <span
                        style={{
                          color: '#262555'
                        }}
                         className="material-icons">search</span>
                </InputAdornment>
              ),
            }} />

            OR

            <Button variant="contained" color="primary" size='large'>
              List a tent
            </Button>
        </div>
    </div>
  </Layout>
)}

export default IndexPage
