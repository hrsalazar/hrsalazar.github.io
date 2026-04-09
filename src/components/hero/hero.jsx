import React from 'react'
import siteConfig from '../../../data/siteConfig'
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
`

const HeroTitle = styled.h1`
  font-weight: 800;
  font-size: clamp(2.5rem, 6vw, 5rem);
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
`

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 3rem 0;
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  animation: slideInUp 1s ease-out 0.2s both;
  
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
`

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  padding: 1.2rem 2.8rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(52, 152, 219, 0.25);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  animation: slideInUp 1s ease-out 0.4s both;
  letter-spacing: 0.3px;
  
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
`

class Hero extends React.Component {
  render() {
    const { title, className } = this.props

    return (
      <HeroContainer className={className}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>
            Development & Integration Lead | Solution Architect | AI-Assisted Development Explorer | Blockchain Enthusiast
          </HeroSubtitle>
          <CTAButton href="#about" aria-label="Scroll to About section">
            ✨ Explore My Work
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
}

export default styled(Hero)`
  ${p => `background-image: url(${p.heroImg || siteConfig.siteCover});`}
  height: auto;
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
