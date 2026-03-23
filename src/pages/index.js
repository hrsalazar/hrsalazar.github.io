import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'

const Separator = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #667eea 50%, transparent 100%);
  margin: 4rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`

class Home extends React.Component {
  render () {
    const title = 'Hola! I\'m Hector Salazar'
    return (
      <Layout location={this.props.location}>
        <SEO
          title={title}
          keywords={['gatsbyjs', 'react', 'curriculum']}
        />

        <Hero
          heroImg={siteConfig.siteCover}
          title={title}
        />

        <Wrapper className={this.props.className} >
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className='avatar'>
                <img
                  className='avatar__image'
                  src='/images/avatar.jpeg'
                  alt='Hector Salazar portrait'
                />
                <div className="social">
                  {siteConfig.social.github && <a className="social-link github" href={siteConfig.social.github} rel="noopener noreferrer" aria-label="GitHub Profile">
                    <FaGithub className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.linkedin && <a className="social-link linkedin" href={siteConfig.social.linkedin} rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <FaLinkedin className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.twitter && <a className="social-link twitter" href={siteConfig.social.twitter} rel="noopener noreferrer" aria-label="Twitter Profile">
                    <FaTwitter className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.email && <a className="social-link email" href={`mailto:${siteConfig.social.email}`} aria-label="Email Contact">
                    <FaEnvelope className="social-icon" size="32" />
                  </a>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title='About' text={siteConfig.authorDescription}/>
              </Col>
              <Col xs={4} sm={4}>
                <Skills title='Core Competencies' skills={siteConfig.skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Repositories />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    margin-bottom: 4rem;
  }

  .avatar {
    align-items: center;
    margin-bottom: 3rem;
    text-align: center;
  }

  .avatar__image {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    max-width: 200px;
    border-radius: 50%;
    margin: 0 auto 2rem;
    border: 4px solid rgba(255, 255, 255, 0.8);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }
  }

  .social {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .social-link {
    padding: 12px;
    color: #6c757d;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
  }

  a.social-link.github:hover {
    color: #24292e;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
  }

  a.social-link.email:hover {
    color: #c23a2b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(194, 58, 43, 0.3);
  }
`
