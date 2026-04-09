import React from "react";
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=6&page=1`

const RepositoriesWrapper = styled.div`
  position: relative;
  width: 100%;
`

const RepositoriesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
  text-transform: none;
`

const RepositoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const RepositoryCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid #e8eef5;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2c3e50 0%, #3498db 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #3498db;

    &::before {
      transform: scaleX(1);
    }
  }
`

const RepositoryLink = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const RepositoryName = styled.strong`
  font-size: 1.3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;

  ${RepositoryCard}:hover & {
    color: #3498db;
  }
`

const RepositoryDescription = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 1.5rem;
  flex: 1;
  min-height: 60px;
`

const RepositoryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #7f8c8d;
`

const RepositoryDate = styled.span`
  color: #95a5a6;
  font-size: 0.75rem;
`

const RepositoryStar = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  color: #3498db;
  font-size: 0.9rem;
`

const RepositoriesLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading'
    }
  }
  async componentDidMount () {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' })
    }
  }
  render () {
    const { status } = this.state
    return (
      <RepositoriesWrapper>
        <RepositoriesTitle>Latest repositories on Github</RepositoriesTitle>
        {status === "loading" && <RepositoriesLoader><Loader /></RepositoriesLoader>}
        {status === "ready" && this.state.repos && (
          <RepositoriesContent>
            {this.state.repos.map(repo => (
              <RepositoryCard key={repo.name}>
                <RepositoryLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <RepositoryName>{repo.name}</RepositoryName>
                  <RepositoryDescription>{repo.description || 'No description'}</RepositoryDescription>
                </RepositoryLink>
                <RepositoryMeta>
                  <RepositoryDate>
                    Updated: {new Date(repo.updated_at).toLocaleDateString('en-US', { 
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
}

export default Repositories
