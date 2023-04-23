import React from 'react';
import '../css/projects.css';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-card' >
        <Project1 />
        <Project2 />
      </div>
    </div>
  )
}
