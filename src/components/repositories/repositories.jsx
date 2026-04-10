import React from "react"
import jsonFetch from "simple-json-fetch"
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import { useLanguage } from '../../i18n/translations.jsx'

import Loader from '../loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=6&page=1`

const RepositoriesWrapper = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

const RepositoriesTitle = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #f0f0f5;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
  text-transform: none;
  background: linear-gradient(135deg, #f0f0f5 0%, #a0a0b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 640px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`

const RepositoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }
`

const RepositoryCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 30px rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.3);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const RepositoryLink = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const RepositoryName = styled.strong`
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 800;
  color: #f0f0f5;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
  word-break: break-word;
  overflow-wrap: break-word;

  ${RepositoryCard}:hover & {
    color: #a855f7;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
    font-size: 1rem;
  }
`

const RepositoryDescription = styled.div`
  font-size: clamp(0.85rem, 2vw, 0.9rem);
  line-height: 1.6;
  color: #a0a0b8;
  margin-bottom: 1.5rem;
  flex: 1;
  min-height: 60px;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    min-height: auto;
  }
`

const RepositoryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  color: #6b6b80;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

const RepositoryDate = styled.span`
  color: #6b6b80;
  font-size: clamp(0.65rem, 1.5vw, 0.75rem);
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    width: 100%;
  }
`

const RepositoryStar = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  color: #a855f7;
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    width: 100%;
    justify-content: space-between;
  }
`

const RepositoriesLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media (max-width: 480px) {
    padding: 2rem;
  }
`

function Repositories() {
  const [repos, setRepos] = React.useState([])
  const [status, setStatus] = React.useState('loading')
  const { t } = useLanguage()

  React.useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await jsonFetch(endpoint)
        if (response.json && response.json.length) {
          setRepos(response.json)
          setStatus('ready')
        }
      } catch (error) {
        console.error('Failed to fetch repositories:', error)
        setStatus('ready')
      }
    }

    fetchRepos()
  }, [])

  return (
    <RepositoriesWrapper>
      <RepositoriesTitle>{t('repositoriesTitle')}</RepositoriesTitle>
      {status === "loading" && <RepositoriesLoader><Loader /></RepositoriesLoader>}
      {status === "ready" && repos && repos.length > 0 && (
        <RepositoriesContent>
          {repos.map(repo => (
            <RepositoryCard key={repo.name}>
              <RepositoryLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <RepositoryName>{repo.name}</RepositoryName>
                <RepositoryDescription>{repo.description || t('noDescription')}</RepositoryDescription>
              </RepositoryLink>
              <RepositoryMeta>
                <RepositoryDate>
                  {t('updated')} {new Date(repo.updated_at).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </RepositoryDate>
                <RepositoryStar>
                  ★ {repo.stargazers_count}
                </RepositoryStar>
              </RepositoryMeta>
            </RepositoryCard>
          ))}
        </RepositoriesContent>
      )}
    </RepositoriesWrapper>
  )
}

export default Repositories
