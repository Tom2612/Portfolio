import React from 'react';
import { IconAt, IconMail, IconPhone, IconDownload, IconMapPin } from '@tabler/icons-react';

export default function Contact() {
  return (
    <div>
        <div className='contact-card'>
            <div className='contact-card-header'>
                <h2>Contact Information</h2>
            </div>
            <div className='contact-card-info'>
                <IconAt />
                <p>t.powell26@outlook.com</p>
                <IconPhone />
                <p>(+44) 07548284915</p>
                <IconDownload />
                <p>Download my CV</p>
                <IconMapPin />
                <p>Cardiff, UK</p>
            </div>
        </div>
    </div>
  )
}
