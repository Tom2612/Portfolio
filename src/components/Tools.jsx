import React from 'react';
import { IconBattery1, IconBattery3, IconBattery4 } from '@tabler/icons-react';

export default function Tools() {
  return (
    <>
        <h2 className='card-title'>My Tools</h2>

        <div className='card-container'>
            <div className='tool'>
                <div className='card-head'>
                    <h3>Competent</h3>
                    <IconBattery4 size={30} color='#5A88C1'/>
                </div>
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
                <div className='card-head'>
                    <h3>Basic</h3>
                    <IconBattery3 size={30} color='#5A88C1'/>
                </div>
                <ul>
                    <li>Jest</li>
                    <li>D3/Tableau</li>
                    <li>Git</li>
                    <li>Cypress</li>
                    <li>Bootstrap/Mantine UI</li>
                </ul>
            </div>

            <div className='tool'>
                <div className='card-head'>
                    <h3>Developing</h3>
                    <IconBattery1 size={30} color='#5A88C1'/>
                </div>
                <ul>
                    <li>Cypress</li>
                    <li>PostgreSQL</li>
                    <li>TypeScript</li>
                </ul>
            </div>
        </div>
    </>
  )
}
