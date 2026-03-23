import React, { Fragment } from 'react'
import SkillBar from './skill-bar'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const SkillsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #25303B;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <SkillsContainer>
      <SkillsTitle>{title}</SkillsTitle>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </SkillsContainer>
  )
}
