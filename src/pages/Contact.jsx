import React from 'react';
import { IconAt, IconBrandLinkedin, IconPhone, IconDownload, IconMapPin } from '@tabler/icons-react';

export default function Contact() {
  return (
    <div className='contact-page'>
        <div className='contact-card'>
            <div className='contact-card-header'>
                <h2>Contact Information</h2>
            </div>
            <div className='contact-card-info'>
                <IconAt size={26} color='#5A88C1'/>
                <p>t.powell26@outlook.com</p>
                <IconBrandLinkedin size={26} color='#5A88C1'/>
                <a style={{marginBottom: '1rem', lineHeight: '1.5rem', color: '#606060'}} href='https://www.linkedin.com/in/tom-powell-575864225/'>Tom Powell</a>
                <IconPhone size={26} color='#5A88C1'/>
                <p>(+44) 07548284915</p>
                <IconDownload size={26} color='#5A88C1'/>
                <p>Download my CV</p>
                <IconMapPin size={26} color='#5A88C1'/>
                <p>Cardiff, UK</p>
            </div>
        </div>
    </div>
  )
}
