import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby";
import {
    siteTitle,
    container,
} from "./layout.module.css"
import Bio from "../components/bio"
import Footer from "./footer";


const BlogPostLayout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
                title
                }
            }
        }
    `)
    return (
        <main className={container}>
            <title>{data.site.siteMetadata.title} | {pageTitle}</title>
            <Link
                to={`/blog`}
                style={{
                    fontSize: "1.5em",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 800,
                    color: "#F27E7E",
                    textDecoration: "none"
                }}>
                {data.site.siteMetadata.title}
            </Link>
            { children }
        </main>
    )
}

export default BlogPostLayout