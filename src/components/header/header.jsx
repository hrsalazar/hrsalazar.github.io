import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig.js'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background: rgba(44, 62, 80, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(52, 152, 219, 0.1);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 70px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderLink = styled.a`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #ecf0f1;
  border: 0;
  margin: 0;
  margin-right: 1.5rem;
  padding: 0.5rem 0;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: #3498db;
  }
`

const GithubLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target='_blank'
    rel="noopener noreferrer"
  >
    <FaGithub size={28} />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #ecf0f1;
  border: 0;
  margin: 0;
  padding: 0.5rem;
  z-index: 10;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #3498db;
    transform: scale(1.1);
  }
`

class Header extends React.Component {
  render () {
    const { headerLinks } = siteConfig

    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink href={headerLink.url} key={`header-link-${i}`}>
                {headerLink.label}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>
          <GithubLink />
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header
