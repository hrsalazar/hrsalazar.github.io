import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../../i18n/translations.jsx'

const AboutContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.06), transparent);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
    border-color: rgba(99, 102, 241, 0.3);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const AboutTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #f0f0f5;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: none;
  background: linear-gradient(135deg, #f0f0f5 0%, #a0a0b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`

const AboutText = styled.div`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  line-height: 1.8;
  color: #a0a0b8;
  font-weight: 400;
  word-break: break-word;
  overflow-wrap: break-word;

  br {
    margin-bottom: 1.2rem;
    display: block;
    content: '';
  }

  strong {
    color: #f0f0f5;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;

    br {
      margin-bottom: 0.8rem;
    }
  }
`

const ReadMoreButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
  font-weight: 700;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.2px;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.65rem 1.3rem;
    font-size: 0.75rem;
    margin-top: 1rem;
  }
`

export default ({ title = 'About', text = '' }) => {
  const [showMore, setShowMore] = React.useState(false)
  const { t } = useLanguage()
  
  const preview = text.split('<br>').slice(0, 3).join('<br>')

  return (
    <AboutContainer id="about">
      <AboutTitle>{t('aboutTitle')}</AboutTitle>
      <AboutText
        dangerouslySetInnerHTML={{ __html: showMore ? text : preview }}
      ></AboutText>
      <ReadMoreButton
        type="button"
        onClick={() => setShowMore(prev => !prev)}
      >
        {showMore ? t('showLess') : t('readMore')}
      </ReadMoreButton>
    </AboutContainer>
  )
}
