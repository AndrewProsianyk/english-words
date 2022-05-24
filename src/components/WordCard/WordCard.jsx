import React from 'react'
import './WordCard.scss'

export default function WordCard() {
    return (
        <form action="" className="word-card">
            <input 
                placeholder="Term"
                className="wordCard-input"
                type="text" 
                />
            <input 
                placeholder="Definition"
                className="wordCard-input"
                type="text" 
                />
        </form>
    )
}
