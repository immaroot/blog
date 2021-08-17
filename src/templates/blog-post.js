import * as React from 'react'
import {graphql, Link} from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/layout'

const BlogPost = ({data, pageContext}) => {
    let {
        previous,
        next,
    } = pageContext
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            <nav>
                <ul style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}>
                    {previous && (
                        <li>
                            <Link to={`/blog/${previous.slug}`}>
                                ← {previous.frontmatter.title}
                            </Link>
                        </li>
                    )}

                    {next && (
                        <li>
                            <Link to={`/blog/${next.slug}`}>
                                {next.frontmatter.title} →
                            </Link>
                        </li>
                    )}

                </ul>
            </nav>
        </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPost