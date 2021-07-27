import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          <p>This is the Home Page!</p>
          <StaticImage
              src="../images/cat.webp"
              alt="An Image Of A Cute Cat"
          />
      </Layout>
  )
}


export default IndexPage