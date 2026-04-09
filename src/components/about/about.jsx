import React, { Fragment } from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  background: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8eef5;
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
    background: radial-gradient(circle, rgba(52, 152, 219, 0.05), transparent);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    border-color: #3498db;

    &::before {
      opacity: 1;
    }
  }
`

const AboutTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: none;
`

const AboutText = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #34495e;
  font-weight: 400;

  br {
    margin-bottom: 1.2rem;
    display: block;
    content: '';
  }

  strong {
    color: #2c3e50;
    font-weight: 700;
  }
`

const ReadMoreButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.2);
  font-weight: 700;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.2px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(52, 152, 219, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`

export default ({ title = 'About', text = '' }) => {
  const [showMore, setShowMore] = React.useState(false)
  const preview = text.split('<br>').slice(0, 3).join('<br>')

  return (
    <AboutContainer id="about">
      <AboutTitle>{title}</AboutTitle>
      <AboutText
        dangerouslySetInnerHTML={{ __html: showMore ? text : preview }}
      ></AboutText>
      <ReadMoreButton
        type="button"
        onClick={() => setShowMore(prev => !prev)}
      >
        {showMore ? '▲ Show less' : '▼ Read more'}
      </ReadMoreButton>
    </AboutContainer>
  )
}
