import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import {useStaticQuery, graphql} from "gatsby";

const Bio = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
                avatar
                twitter
            }
        }
    }
    `)
    const { author, twitter } = data.site.siteMetadata
    return (
        <div style={{
            display: `flex`,
            marginBottom: 40,
        }}>
            <StaticImage
                src="../images/avatar.png"
                alt={author}
                style={{
                    marginRight: 10,
                    marginBottom: 0,
                    width: 50,
                    height: 50,
                    borderRadius: `100%`,
                }}
            />
            <p>
                <a href={`https://www.twitter.com/${twitter}`}>
                    {author}
                </a>
            <br/>
                Software engineering student
            </p>
        </div>
    )
}

export default Bio