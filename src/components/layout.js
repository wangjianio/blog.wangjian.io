import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Bio from '../components/bio';

function getBgColor() {
  return window.scrollY > 56 ? '#1d1e22' : '#1f4ec2';
}

export default function Layout(props) {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  const [headerNavBackgroundColor, setHeaderNavBackgroundColor] = useState(getBgColor());

  function handleScroll() {
    setHeaderNavBackgroundColor(getBgColor());
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (location.pathname === rootPath) {
    header = (
      <>
        <div style={{
          backgroundColor: '#1f4ec2',
          color: '#fff',
          margin: 0,
        }}>
          <div style={{ padding: '80px 16px' }}>
            <h1 style={{ margin: 0, fontSize: 48 }}>
              <Link to={`/`} style={{ color: 'inherit', textDecoration: 'none' }}>Featured</Link>
            </h1>
            <Bio />
          </div>

        </div>
      </>
    )
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    )
  }

  return (
    <div>
      <div style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        lineHeight: '56px',
        padding: '0 16px',
        backgroundColor: headerNavBackgroundColor,
        color: '#fff',
        transition: 'background-color 500ms cubic-bezier(0.2, 0.6, 0.3, 1)',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <div>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>blog.wangjian.io</Link>
        </div>

        <div>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>Activities</Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>Featured</Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>Archive</Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>Notes</Link>
        </div>
      </div>

      <header>
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.{` `}
        <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">蒙ICP备17002783号</a>
      </footer>
    </div>
  )
}
