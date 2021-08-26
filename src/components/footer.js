import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                github
                linkedIn
            }
        }
    }
    `)
    const { github, linkedIn } = data.site.siteMetadata
    return (
        <div>
            <p style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>

                <Link to={`https://www.github.com/${github}`} style={{
                    marginLeft: 10,
                    marginRight: 10,
                }}>
                    github
                </Link>

                <Link to={`https://www.linkedin.com/in/${linkedIn}`} style={{
                    marginLeft: 10,
                    marginRight: 10,
                }}>
                    linkedIn
                </Link>
            </p>
        </div>
    )
}


export default Footer