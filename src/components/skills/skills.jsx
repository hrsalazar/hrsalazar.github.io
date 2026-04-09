import React from 'react'
import SkillBar from './skill-bar'
import styled from 'styled-components'
import { useLanguage } from '../../i18n/translations.jsx'

const SkillsContainer = styled.div`
  background: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8eef5;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    border-color: #3498db;
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
  color: #2c3e50;
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: none;

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
