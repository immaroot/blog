const path = require(`path`)

exports.onPostBuild = ({reporter}) => {
    reporter.info("Build Successfully.")
}

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const result = await graphql(`
    {
        allMdx(sort: {fields: frontmatter___date, order: ASC}) {
            edges {
                node {
                    slug
                    frontmatter {
                        date
                        title
                    }
                }
                next {
                    slug
                    frontmatter {
                        date
                        title
                    }
                }
                previous {
                    slug
                    frontmatter {
                        date
                        title
                    }
                }
            }
        }
    }
    `)

    if (result.errors) {
        throw result.errors
    }

    result.data.allMdx.edges.forEach( edge => {
        createPage({
            path: `/blog/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.slug,
                previous: edge.previous,
                next: edge.next,
            },
        })
    })
}