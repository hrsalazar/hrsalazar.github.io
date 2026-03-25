import React from 'react'
import { withPrefix } from 'gatsby'
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
  min-height: 80vh;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(37, 48, 59, 0.75) 0%, rgba(37, 48, 59, 0.56) 45%, rgba(0, 0, 0, 0.35) 100%);
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
    background: radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.32), transparent 60%);
    transform: rotate(-10deg);
    z-index: 1;
    pointer-events: none;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
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
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin: 0 0 1rem 0;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  line-height: 1.2;
  letter-spacing: -0.02em;
`

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
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
            Development & Integration Lead | Solution Architect | AI-Assisted Development Explorer | Github Repos Collector
          </HeroSubtitle>
          <CTAButton href="#about" aria-label="Scroll to About section">Explore My Work</CTAButton>
        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default styled(Hero)`
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 80vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
