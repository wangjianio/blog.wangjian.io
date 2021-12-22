import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";


export default function Layout(props) {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          // ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        {' '}
        <a href="https://beian.miit.gov.cn/" target="_blank">蒙ICP备17002783号</a>
        {' '}
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=15072502000017"
          style={{ lineHeight: '20px' }}
          >
          <img src="http://www.beian.gov.cn/img/ghs.png" style={{ marginBottom: 0, verticalAlign: -4 }} />
          {' '}
          <span style={{ color: '#939393' }}>蒙公网安备 15072502000017号</span>
        </a>
      </footer>
    </div>
  );
}
