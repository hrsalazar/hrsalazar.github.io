import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <div className="skill-header">
        <label htmlFor={`${name}-bar`}>{name}</label>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level'></div>
      </div>
    </div>
  )
}

SkillBar.displayName = 'SkillBar'

export default styled(SkillBar)`
  margin-bottom: 1.5rem;

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  label {
    font-weight: 600;
    color: #25303B;
    font-size: 0.95rem;
    margin: 0;
  }

  .skill-percentage {
    font-weight: 700;
    color: #667eea;
    font-size: 0.9rem;
  }

  .skill__bar {
    height: 12px;
    background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 100%);
    border-radius: 6px;
    padding: 2px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .skill__level {
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    width: ${p => p.level || 0}%;
    height: 8px;
    border-radius: 4px;
    transition: width 1.5s ease-in-out;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
      animation: shimmer 2s infinite;
    }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  &:hover .skill__level {
    filter: brightness(1.1);
  }
`
