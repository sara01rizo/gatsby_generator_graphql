import React from 'react'
import Link from 'gatsby-plugin-catch-links'
import { graphql } from 'gatsby'

export default function Template({data}) {
    const post = data.allMarkdownRemark

    return(
        <div>
            <Link to="/blog">Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date} </h4>
            <div dangerouslySetInnerHTML={{__html: post.html }} />
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        allMarkdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
            }
        }
    }
`