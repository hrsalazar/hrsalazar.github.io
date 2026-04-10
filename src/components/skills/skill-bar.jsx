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
        <div className='skill__level' style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

SkillBar.displayName = 'SkillBar'

export default styled(SkillBar)`
  margin-bottom: 2rem;
  animation: fadeInUp 0.6s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  label {
    font-weight: 700;
    color: #f0f0f5;
    font-size: 0.95rem;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .skill-percentage {
    font-weight: 800;
    color: #a855f7;
    font-size: 1rem;
  }

  .skill__bar {
    height: 12px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    padding: 1px;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
  }

  .skill__level {
    background: linear-gradient(90deg, #6366f1 0%, #a855f7 60%, #06b6d4 100%);
    height: 10px;
    border-radius: 8px;
    transition: width 1.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    box-shadow: 0 2px 12px rgba(99, 102, 241, 0.3);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
      );
      animation: shimmer 3s infinite;
      border-radius: 8px;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  &:hover .skill__level {
    filter: brightness(1.15);
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
  }
`
