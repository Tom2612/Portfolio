import React, { useState, useRef } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export default function Collapse(props) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    const toggle = () => {
        setOpen(!open);
    }

  return (
    <div>
        <h3 onClick={toggle} className='content-label'>
            {props.label}{open ? <IconChevronUp size={24} stroke={1} /> : <IconChevronDown size={24} stroke={1} />}
        </h3>
        <div className='content-parent'
            ref={contentRef}
            style={open ? {height: contentRef.current.scrollHeight + 'px'} : {height: '0px'}}
        >
            <div className='content'>{props.children}</div>
        </div>
    </div>
  )
}
