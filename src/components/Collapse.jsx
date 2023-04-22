import React, { useState, useRef } from 'react'

export default function Collapse(props) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef();

    const toggle = () => {
        setOpen(!open);
    }
  return (
    <div>
        <button onClick={toggle}>{props.label}</button>
        {open && 
        <div className={open ? 'content-show' : 'content-parent'}
            // ref={contentRef}
        >
            <div className='content'>{props.children}</div>
        </div>
        
        }
    </div>
  )
}
