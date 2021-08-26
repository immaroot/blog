import * as React from "react"
import { Link } from "gatsby"
import {
    postContainer,
    postHeading,
    postDate,
    postExcerpt
} from "./blog-post-list.module.css"

const BlogPostList = ({id, path, title, date, excerpt}) => {
    return (
        <article key={id} className={postContainer}>
            <h2  style={{
                fontSize: "1.5em",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                color: "#F27E7E",
            }}>
                <Link to={path}>
                    {title}
                </Link>
            </h2>
            <p className={postDate}>{date}</p>
            <p className={postExcerpt}>{excerpt}</p>
        </article>
    )
}

export default BlogPostList
