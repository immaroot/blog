import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby";
import {
    siteTitle,
    container,
} from "./layout.module.css"
import Bio from "../components/bio"
import Footer from "./footer";


const Layout = ({pageTitle, children}) => {
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
            <Link to={`/blog`} className={siteTitle}>
                {data.site.siteMetadata.title}
            </Link>
            <Bio />
            { children }
            <Footer />
        </main>
    )
}

export default Layout