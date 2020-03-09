import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Bio(params) {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata
  return (
    <p style={{
      color: '#8fa6e0',
    }}>
      Written by <strong>{author}</strong> who lives and works in Hangzhou building useful things. You can follow him on
      {` `}
      <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>.
    </p>
  )
}


