import React from 'react'
import './style.css'

interface Props {
    children?: React.ReactNode,
    onClick: () => void
}

const Button : React.FC<Props> = ({children, onClick}) => {
    return (
        <button className='btn-component' onClick={onClick}>
            {children}
        </button>
    )
}

export default Button