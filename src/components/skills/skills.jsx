import React from 'react'
import SkillBar from './skill-bar'
import styled from 'styled-components'
import { useLanguage } from '../../i18n/translations.jsx'

const SkillsContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
    border-color: rgba(99, 102, 241, 0.3);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const SkillsTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #f0f0f5;
  margin-bottom: 2.5rem;
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

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`

export default ({ title = 'Skills', skills = [] }) => {
  const { t } = useLanguage()

  return (
    <SkillsContainer>
      <SkillsTitle>{t('skillsTitle')}</SkillsTitle>
      <SkillsGrid>
        {skills.map(skill => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}
