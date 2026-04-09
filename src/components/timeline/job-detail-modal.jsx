import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../i18n/translations'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 999;
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(4px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalBubble = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 95%;
  max-height: 85vh;
  overflow-y: auto;
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  border: 1px solid rgba(52, 152, 219, 0.15);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    max-height: 90vh;
    border-radius: 16px;
    width: 96%;
  }

  @media (max-width: 480px) {
    max-height: 95vh;
    border-radius: 12px;
    width: 98%;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f7fa;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #2c3e50 0%, #3498db 100%);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #34495e 0%, #2980b9 100%);
  }
`

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 32px 36px;
  border-radius: 20px 20px 0 0;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 24px 20px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 10px;
  }
`

const HeaderContent = styled.div`
  flex: 1;
`

const JobCompany = styled.h3`
  margin: 0 0 8px 0;
  font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin: 0 0 4px 0;
  }
`

const JobTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: clamp(1.2rem, 4vw, 1.6rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.3;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0 0 4px 0;
  }
`

const JobDuration = styled.p`
  margin: 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
  min-width: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
    min-width: 36px;
  }
`

const ModalContent = styled.div`
  padding: 36px;
  color: #34495e;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`

const BulletPointList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const BulletPoint = styled.div`
  display: flex;
  gap: 14px;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.7;
  color: #34495e;
  animation: slideIn 0.4s ease-out backwards;
  animation-delay: ${props => props.delay || '0s'};
  word-break: break-word;
  overflow-wrap: break-word;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-12px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    content: '→';
    color: #3498db;
    font-weight: 900;
    flex-shrink: 0;
    font-size: 1.2rem;
    line-height: 1.7;
    min-width: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 10px;
    line-height: 1.6;

    &::before {
      font-size: 1rem;
      min-width: 1rem;
    }
  }
`

const EmptyState = styled.p`
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.7;
  color: #34495e;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.6;
  }
`

const JobDetailModal = ({ job, isOpen, onClose }) => {
  const t = useTranslation('es')

  if (!isOpen) return null

  const items = job.description
    .split(/\\r/)
    .map(item => item.trim())
    .filter(item => item.length > 0)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalBubble>
        <ModalHeader>
          <HeaderContent>
            <JobCompany>{job.company}</JobCompany>
            <JobTitle>{job.occupation}</JobTitle>
            <JobDuration>{job.duration || t.present}</JobDuration>
          </HeaderContent>
          <CloseButton onClick={onClose} aria-label={t.closeModal} title={t.closeModal}>
            ✕
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          {items.length > 0 ? (
            <BulletPointList>
              {items.map((item, idx) => (
                <BulletPoint key={idx} delay={`${idx * 0.08}s`}>
                  {item}
                </BulletPoint>
              ))}
            </BulletPointList>
          ) : (
            <EmptyState>{job.description}</EmptyState>
          )}
        </ModalContent>
      </ModalBubble>
    </Overlay>
  )
}

export default JobDetailModal
