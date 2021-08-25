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
            <h2 className={postHeading}>
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
