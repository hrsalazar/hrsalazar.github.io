import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig.js'
import { useLanguage } from '../../i18n/translations.jsx'

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
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 0 1rem;
    height: 60px;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`

const HeaderLink = styled.a`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #ecf0f1;
  border: 0;
  margin: 0;
  padding: 0.5rem 0.5rem;
  font-weight: 500;
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  white-space: nowrap;
  
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

  @media (max-width: 640px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.3rem;
  }
`

const LanguageToggle = styled.button`
  background: rgba(52, 152, 219, 0.2);
  border: 1.5px solid rgba(52, 152, 219, 0.5);
  color: #3498db;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  margin-left: 0.5rem;

  &:hover {
    background: rgba(52, 152, 219, 0.4);
    border-color: rgba(52, 152, 219, 0.8);
    color: #ffffff;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 640px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
    margin-left: 0.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.35rem 0.5rem;
    font-size: 0.65rem;
    gap: 0.2rem;
  }
`

const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const GithubLink = styled.a`
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

  @media (max-width: 640px) {
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
  }
`

function Header() {
  const { headerLinks } = siteConfig
  const { language, toggleLanguage } = useLanguage()

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
        <IconsGroup>
          <LanguageToggle onClick={toggleLanguage} title="Toggle language">
            {language.toUpperCase()}
          </LanguageToggle>
          <GithubLink
            href={`https://github.com/${siteConfig.githubUsername}`}
            target='_blank'
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FaGithub size={24} />
          </GithubLink>
        </IconsGroup>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header
