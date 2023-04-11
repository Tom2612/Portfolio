import React from 'react'

export default function Tools() {
  return (
    <>
        <h2>My Tools</h2>

        <div className='tool'>
            <h3>Competent</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node/Express</li>
                <li>MongoDB/Mongoose</li>
                <li>React</li>
            </ul>
        </div>

        <div className='tool'>
            <h3>Basic</h3>
            <ul>
                <li>Jest</li>
                <li>D3/Tableau</li>
                <li>Git</li>
                <li>Cypress</li>
                <li>Bootstrap/Mantine UI</li>
            </ul>
        </div>

        <div className='tool'>
            <h3>Developing</h3>
            <ul>
                <li>Cypress</li>
                <li>PostgreSQL</li>
                <li>TypeScript</li>
            </ul>
        </div>
    </>
  )
}
