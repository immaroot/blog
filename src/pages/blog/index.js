import * as React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
import BlogPostList from "../../components/blog-post-list";

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <BlogPostList
                        id={node.id}
                        path={`/blog/${node.slug}`}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        excerpt={node.excerpt}
                    />
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        excerpt
      }
    }
  }
`


export default BlogPage