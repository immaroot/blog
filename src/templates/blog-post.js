import * as React from 'react'
import {graphql, Link} from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BlogPostLayout from "../components/blog-post-layout"
import Bio from "../components/bio";

const BlogPost = ({data, pageContext}) => {
    let {
        previous,
        next,
    } = pageContext
    return (
        <BlogPostLayout pageTitle={data.mdx.frontmatter.title}>
            <h1 style={{
                margin: "10px 0",
                fontSize: "2.5em",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                color: "#F27E7E",
            }}>
                {data.mdx.frontmatter.title}
            </h1>
            <p style={{
                fontSize: `0.85em`,
            }}>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            <Bio />
            <nav>
                <ul style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}>
                    <li>
                        {previous && (
                            <Link to={`/blog/${previous.slug}`}>
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={`/blog/${next.slug}`}>
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </BlogPostLayout>
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