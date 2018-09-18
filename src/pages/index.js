import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.link};
`

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledLink to="/page-2/">Go to page 2</StyledLink>
  </Layout>
)

export default IndexPage
