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
    <p>
      Written by <strong>{author}</strong> who lives and works in China building useful things.
      {` `}
      <a href={`https://twitter.com/${social.twitter}`}>You can follow him on Twitter</a>
    </p>
  )
}


