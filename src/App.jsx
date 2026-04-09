import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import siteConfig from '../data/siteConfig'
import { LanguageProvider } from './i18n/translations.jsx'

import Layout from './components/layout'
import Hero from './components/hero'
import SEO from './components/SEO'
import Wrapper from './components/wrapper'
import About from './components/about'
import Skills from './components/skills'
import Timeline from './components/timeline'
import Repositories from './components/repositories'

const Separator = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #2c3e50 30%, #3498db 50%, #2c3e50 70%, transparent 100%);
  margin: 5rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
  }

  @media (max-width: 640px) {
    margin: 3rem 0;
  }
`

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out;

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
`

const AvatarImage = styled.img`
  box-shadow: 0 10px 40px rgba(52, 152, 219, 0.25);
  max-width: 200px;
  width: 100%;
  border-radius: 50%;
  margin: 0 auto 2rem;
  border: 6px solid rgba(255, 255, 255, 0.9);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: scale(1.08) rotateZ(2deg);
    box-shadow: 0 16px 50px rgba(52, 152, 219, 0.35);
    border-color: #3498db;
  }

  @media (max-width: 480px) {
    max-width: 150px;
    margin: 0 auto 1.5rem;
  }
`

const SocialLinks = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
`

const SocialLink = styled.a`
  padding: 12px;
  color: #3498db;
  border-radius: 50%;
  background: rgba(52, 152, 219, 0.08);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(52, 152, 219, 0.2);
  width: 56px;
  height: 56px;

  &:hover {
    color: white;
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
    border-color: transparent;
  }

  &.twitter:hover {
    background: linear-gradient(135deg, #1da1f2 0%, #1a91da 100%);
  }

  &.github:hover {
    background: linear-gradient(135deg, #24292e 0%, #1a1e22 100%);
  }

  &.linkedin:hover {
    background: linear-gradient(135deg, #0077B5 0%, #00669a 100%);
  }

  &.email:hover {
    background: linear-gradient(135deg, #c23a2b 0%, #a02920 100%);
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    padding: 10px;
  }
`

const AppWrapper = styled.div`
  .page-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    margin-bottom: 4rem;
    box-sizing: border-box;
  }

  .avatar-col {
    align-items: center;
    margin-bottom: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .page-content {
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .page-content {
      padding: 0 0.75rem;
      margin-bottom: 2rem;
    }

    .avatar-col {
      margin-bottom: 2rem;
    }
  }
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'red', fontSize: '1.2rem' }}>
          <h1>❌ Error Loading Portfolio</h1>
          <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
          <p>Check browser console (F12) for more details</p>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  const title = "Hola! I'm Hector Salazar"

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppWrapper>
          <Layout>
            <SEO title={title} keywords={['portfolio', 'react', 'software engineer']} />

            <Hero heroImg={siteConfig.siteCover} title={title} />

            <Wrapper>
              <Container className="page-content" fluid>
                <Row>
                  <Col xs={4} className="avatar-col">
                    <AvatarSection>
                      <AvatarImage
                        src="/images/avatar.jpeg"
                        alt="Hector Salazar portrait"
                      />
                      <SocialLinks>
                        {siteConfig.social?.github && (
                          <SocialLink
                            className="social-link github"
                            href={siteConfig.social.github}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="GitHub Profile"
                            title="GitHub"
                          >
                            <FaGithub size={24} />
                          </SocialLink>
                        )}
                        {siteConfig.social?.linkedin && (
                          <SocialLink
                            className="social-link linkedin"
                            href={siteConfig.social.linkedin}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="LinkedIn Profile"
                            title="LinkedIn"
                          >
                            <FaLinkedin size={24} />
                          </SocialLink>
                        )}
                        {siteConfig.social?.twitter && (
                          <SocialLink
                            className="social-link twitter"
                            href={siteConfig.social.twitter}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Twitter Profile"
                            title="Twitter"
                          >
                            <FaTwitter size={24} />
                          </SocialLink>
                        )}
                        {siteConfig.social?.email && (
                          <SocialLink
                            className="social-link email"
                            href={`mailto:${siteConfig.social.email}`}
                            aria-label="Email Contact"
                            title="Email"
                          >
                            <FaEnvelope size={24} />
                          </SocialLink>
                        )}
                      </SocialLinks>
                    </AvatarSection>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4}>
                    <About title="About" text={siteConfig.authorDescription} />
                  </Col>
                  <Col xs={4} sm={4}>
                    <Skills title="Core Competencies" skills={siteConfig.skills} />
                  </Col>
                </Row>
                <Separator />
                <Timeline />
                <Separator />
                <Repositories />
              </Container>
            </Wrapper>
          </Layout>
        </AppWrapper>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
