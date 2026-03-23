import React, { Fragment } from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #25303B;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #495057;

  br {
    margin-bottom: 1rem;
  }

  strong {
    color: #25303B;
    font-weight: 600;
  }
`

export default ({ title = 'About', text = '' }) => {
  return (
    <AboutContainer>
      <AboutTitle>{title}</AboutTitle>
      <AboutText dangerouslySetInnerHTML={{ __html: text }}></AboutText>
    </AboutContainer>
  )
}
