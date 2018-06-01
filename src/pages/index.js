import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from "../utils/typography";

const IndexPage = ({ data }) => (
  <div>
    <h1 >Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} 
            style={{ textDecoration: `none`, color: `inherit` }}>
            <h3 style={{textDecoration: `none`, marginBottom: rhythm(1 / 8), marginTop: rhythm(1.25)}}>
              {node.frontmatter.title}{" "}<span style={{color: "lightgray"}}>- {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
export default IndexPage
