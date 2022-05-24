import React from 'react'
import './WordCardsList.scss'
import WordCard from '../WordCard/WordCard'

export default function WordCardsList() {
    return (
        <div className="wordCards-list">
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <WordCard />
            <button className="addCard-button">
                <svg className="addCard-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 20C4.97967 19.994 0.506062 15.5204 0.5 10V9.80002C0.609931 4.30455 5.13459 -0.0720257 10.6307 0.000898217C16.1268 0.0738221 20.5337 4.5689 20.4978 10.0654C20.4619 15.5618 15.9966 19.9989 10.5 20ZM6.5 9.00002C5.94772 9.00002 5.5 9.44773 5.5 10V10C5.5 10.5523 5.94772 11 6.5 11H9.5V14C9.5 14.5523 9.94772 15 10.5 15V15C11.0523 15 11.5 14.5523 11.5 14V11H14.5C15.0523 11 15.5 10.5523 15.5 10V10C15.5 9.44773 15.0523 9.00002 14.5 9.00002H11.5V6.00002C11.5 5.44773 11.0523 5.00002 10.5 5.00002V5.00002C9.94772 5.00002 9.5 5.44773 9.5 6.00002V9.00002H6.5Z" fill="#7F809B" />
                </svg>
                <span className="addCard-text">Add more</span>
            </button>
        </div>
    );
}
