import React, { useState } from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'
import { useLanguage } from '../../i18n/translations.jsx'
import JobDetailModal from './job-detail-modal'

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow-x: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 100px;
    margin: 0 0 0 -2px;
    width: 3px;
    height: calc(100% - 100px);
    background: linear-gradient(180deg, #2c3e50 0%, #3498db 50%, #2c3e50 100%);
    border-radius: 2px;
    box-shadow: 0 0 16px rgba(52, 152, 219, 0.15);
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;

    &::before {
      left: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`

const TimelineTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
  text-transform: none;

  @media (max-width: 640px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`

const TimelineItem = styled.article`
  width: 100%;
  margin: 0 0 50px 0;
  position: relative;
  animation: fadeInUp 0.6s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:nth-child(even) .timeline__inner {
    margin-left: 52%;
    margin-right: 0;
    padding-left: 2rem;
  }

  &:nth-child(odd) .timeline__inner {
    margin-right: 52%;
    margin-left: 0;
    padding-right: 2rem;
  }

  @media (max-width: 1024px) {
    &:nth-child(even) .timeline__inner,
    &:nth-child(odd) .timeline__inner {
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  @media (max-width: 768px) {
    margin: 0 0 40px 0;

    &:nth-child(even) .timeline__inner,
    &:nth-child(odd) .timeline__inner {
      margin-left: 70px !important;
      margin-right: 0 !important;
    }
  }

  @media (max-width: 480px) {
    margin: 0 0 35px 0;

    &:nth-child(even) .timeline__inner,
    &:nth-child(odd) .timeline__inner {
      margin-left: 65px !important;
    }
  }
`

const TimelineInner = styled.button`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  border: 2px solid #e8eef5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.35s ease;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%;
  cursor: pointer;
  padding: 0;
  text-align: left;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #3498db;

    .timeline__date {
      transform: scale(1.1);
      box-shadow: 0 8px 24px rgba(52, 152, 219, 0.35);
    }

    .timeline__content {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      
      h2, small {
        color: #ffffff;
      }

      .timeline__badge {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
        color: #ffffff;
      }
    }
  }

  @media (max-width: 480px) {
    &:active {
      transform: translateY(-3px);
    }
  }
`

const TimelineDate = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80px;
  height: 80px;
  padding: 8px 5px;
  top: 20px;
  left: 50%;
  margin-left: -40px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #fff;
  box-shadow: 0 6px 20px rgba(44, 62, 80, 0.25);
  z-index: 2;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    left: -40px;
    margin-left: 0;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
    font-size: 9px;
  }
`

const TimelineMonth = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.3px;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const TimelineYear = styled.span`
  display: block;
  font-size: 10px;
  opacity: 0.85;
  font-weight: 700;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`

const TimelineContent = styled.div`
  padding: 28px;
  background: #ffffff;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 24px;
    gap: 12px;
  }

  @media (max-width: 640px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`

const ContentLeft = styled.div`
  flex: 1;
  min-width: 0;
  width: 100%;
`

const JobTitle = styled.h2`
  margin: 0 0 6px 0;
  color: #2c3e50;
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 700;
  text-transform: none;
  letter-spacing: -0.005em;
  line-height: 1.3;
  transition: all 0.3s ease;
  word-break: break-word;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 4px 0;
  }
`

const JobCompany = styled.small`
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  color: #3498db;
  font-weight: 600;
  display: block;
  margin-top: 0.4rem;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-top: 0.2rem;
  }
`

const JobDuration = styled.small`
  font-size: 0.8rem;
  color: #7f8c8d;
  display: block;
  margin-top: 0.3rem;
  font-weight: 500;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-top: 0.2rem;
  }
`

const ViewMoreBadge = styled.div`
  background: #ecf0f1;
  border: 1.5px solid #3498db;
  color: #3498db;
  padding: 8px 14px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  transition: all 0.3s ease;
  flex-shrink: 0;

  @media (max-width: 640px) {
    align-self: flex-start;
    padding: 6px 12px;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.65rem;
  }
`

const Timeline = ({ className }) => {
  const [selectedJob, setSelectedJob] = useState(null)
  const { t } = useLanguage()

  return (
    <>
      <TimelineContainer className={className}>
        <TimelineTitle>{t('professionalExperience')}</TimelineTitle>
        {siteConfig.jobs && siteConfig.jobs.map((job, index) => {
          const jobKey = `${job.begin.month}-${job.begin.year}`

          return (
            <TimelineItem key={jobKey} style={{ animationDelay: `${index * 0.1}s` }}>
              <TimelineDate>
                <TimelineMonth>{job.begin.month}</TimelineMonth>
                <TimelineYear>{job.begin.year}</TimelineYear>
              </TimelineDate>
              <TimelineInner
                className="timeline__inner"
                onClick={() => setSelectedJob(job)}
                type="button"
              >
                <TimelineContent className="timeline__content">
                  <ContentLeft>
                    <JobTitle>{job.occupation}</JobTitle>
                    <JobCompany>{job.company}</JobCompany>
                    <JobDuration>{job.duration || t('present')}</JobDuration>
                  </ContentLeft>
                  <ViewMoreBadge className="timeline__badge">
                    {t('viewDetails')}
                  </ViewMoreBadge>
                </TimelineContent>
              </TimelineInner>
            </TimelineItem>
          )
        })}
      </TimelineContainer>

      <JobDetailModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </>
  )
}

export default styled(Timeline)`
  position: relative;
  width: 100%;
`
