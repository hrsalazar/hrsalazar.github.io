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
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
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
  color: rgba(240, 240, 245, 0.7);
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
    background: linear-gradient(90deg, #6366f1, #a855f7);
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: #f0f0f5;
  }

  @media (max-width: 640px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.3rem;
  }
`

const LanguageToggle = styled.button`
  background: rgba(99, 102, 241, 0.15);
  border: 1.5px solid rgba(99, 102, 241, 0.4);
  color: #a0a0ff;
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
    background: rgba(99, 102, 241, 0.3);
    border-color: rgba(99, 102, 241, 0.7);
    color: #ffffff;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
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
  color: rgba(240, 240, 245, 0.7);
  border: 0;
  margin: 0;
  padding: 0.5rem;
  z-index: 10;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #a855f7;
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
