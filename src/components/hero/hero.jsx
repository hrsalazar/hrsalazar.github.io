import React from 'react'
import siteConfig from '../../../data/siteConfig'
import { useLanguage } from '../../i18n/translations.jsx'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  will-change: transform;
  margin-top: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(44, 62, 80, 0.65) 45%, rgba(52, 152, 219, 0.1) 100%);
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: -20%;
    bottom: -35%;
    width: 80%;
    height: 80%;
    background: radial-gradient(circle at 70% 70%, rgba(52, 152, 219, 0.15), transparent 60%);
    transform: rotate(-10deg);
    z-index: 1;
    pointer-events: none;
    animation: float 12s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% { 
      transform: translateY(0px) rotate(0deg) scale(1); 
    }
    50% { 
      transform: translateY(-30px) rotate(3deg) scale(1.05); 
    }
    100% { 
      transform: translateY(0px) rotate(0deg) scale(1); 
    }
  }

  @media (max-width: 768px) {
    margin-top: 70px;

    &::after {
      right: -30%;
      bottom: -40%;
      width: 100%;
      height: 100%;
    }
  }
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const HeroTitle = styled.h1`
  font-weight: 800;
  font-size: clamp(2rem, 6vw, 4.5rem);
  margin: 0 0 1.5rem 0;
  color: #fff;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
  letter-spacing: -0.02em;
  animation: slideInDown 1s ease-out;
  
  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    margin: 0 0 1rem 0;
  }
`

const HeroSubtitle = styled.p`
  font-size: clamp(0.85rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 2rem 0;
  font-weight: 300;
  max-width: 95%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  animation: slideInUp 1s ease-out 0.2s both;
  padding: 0 1rem;
  box-sizing: border-box;
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 640px) {
    font-size: 0.9rem;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
    max-width: 100%;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 0 0 1.2rem 0;
    line-height: 1.4;
  }
`

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  padding: 1rem 2.2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(52, 152, 219, 0.25);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  animation: slideInUp 1s ease-out 0.4s both;
  letter-spacing: 0.3px;
  white-space: nowrap;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::before {
    width: 300px;
    height: 300px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 35px rgba(52, 152, 219, 0.35);
    background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 0.85rem;
  }

  @media (max-width: 640px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.8rem;
    
    &:hover::before {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
      opacity: 0.7;
    }
    50% {
      transform: translateX(-50%) translateY(10px);
      opacity: 1;
    }
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 640px) {
    bottom: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

function Hero({ title, className, heroImg }) {
  const { t } = useLanguage()

  return (
    <HeroContainer className={className} style={{ backgroundImage: `url(${heroImg || siteConfig.siteCover})` }}>
      <TitleContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>
          {t('heroSubtitle')}
        </HeroSubtitle>
        <CTAButton href="#about" aria-label={t('scrollToAbout')}>
          {t('exploreMy')}
        </CTAButton>
      </TitleContainer>
      <ScrollIndicator>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </ScrollIndicator>
    </HeroContainer>
  )
}

Hero.defaultProps = {
  title: 'Hector Salazar',
  className: '',
  heroImg: null
}

export default styled(Hero)`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`
