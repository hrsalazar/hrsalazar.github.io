import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const Timeline = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="timeline__main-title">Professional Experience</h1>
      {siteConfig.jobs && siteConfig.jobs.map(job => (
        <article key={job.begin.month + job.begin.year} className='timeline__item'>
          <div className="inner">
            <span className="timeline__date">
              <span className="timeline__month">{job.begin.month}</span>
              <span className="timeline__year">{job.begin.year}</span>
            </span>
            <h2 className='timeline__title'>
              {job.occupation} at {job.company}
              <br />
              <small className='timeline__title--small'>({job.duration || 'present'})</small>
            </h2>
            <p>{job.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default styled(Timeline)`
  position: relative;

  .timeline__main-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #25303B;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin: 70px 0 0 -2px;
    width: 4px;
    height: calc(100% - 70px);
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  .timeline__item {
    width: 100%;
    margin: 0 0 40px 0;
    position: relative;
  }

  .timeline__item:after {
    content: '';
    display: block;
    clear: both;
  }

  .timeline__item div.inner {
    width: 100%;
    float: left;
    margin: 85px 0 0 0;
    border-radius: 12px;
    border: none;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
  }

  .timeline__date {
    display: block;
    width: 70px;
    height: 70px;
    padding: 8px 5px;
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -35px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .timeline__date span {
    display: block;
    text-align: center;
  }

  .timeline__month {
    font-size: 14px;
    font-weight: 700;
  }

  .timeline__year {
    font-size: 11px;
    opacity: 0.9;
  }

  .timeline__title {
    padding: 20px 20px 15px;
    margin: 0;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: none;
    border-radius: 12px 12px 0 0;
    position: relative;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .timeline__title:after {
    content: '';
    position: absolute;
    top: -8px;
    left: 30%;
    width: 12px;
    height: 12px;
    transform: rotate(-45deg);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  .timeline__item div.inner p {
    padding: 20px;
    margin: 0;
    font-size: 1rem;
    background: #fff;
    color: #495057;
    border-radius: 0 0 12px 12px;
    line-height: 1.6;
  }

  .timeline__item:nth-child(2n+2) div.inner {
    float: right;
  }

  .timeline__title--small {
    font-size: 0.85rem;
    opacity: 0.9;
    font-weight: 400;
  }

  ${p => config().media['sm']`
    .timeline__item div.inner {
      width: 45%;
      margin: 5px 0 0 0;
    }

    .timeline__item div.inner h2:after {
      top: 20px;
      left: unset;
      right: -6px;
    }

    .timeline__item:nth-child(2n+2) div.inner h2:after {
      left: -6px;
      right: unset;
    }
  `}
`
