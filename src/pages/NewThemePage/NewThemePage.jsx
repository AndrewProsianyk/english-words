import React from 'react'
import {NavLink} from 'react-router-dom'
import './NewThemePage.scss'
import WordCard from '../../components/WordCard/WordCard';
import WordCardsList from '../../components/WordCardsList/WordCardsList';

export default function NewThemePage() {
    return (
        <div className="newTheme-page container">
            <div className="card-menu">
                <NavLink to='/flashcards' className="back-button">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.24221 1.22174C8.85165 0.831451 8.21856 0.831445 7.82813 1.22187L0.0499878 9.00001L7.82813 16.7782C8.21856 17.1686 8.85165 17.1686 9.24221 16.7783C9.63299 16.3878 9.6332 15.7543 9.24253 15.3637L2.87799 9.00001L9.24253 2.63637C9.6332 2.24576 9.63299 1.61224 9.24221 1.22174Z" fill="#0B0C27" />
                    </svg>
                </NavLink>
                <span className="card-title">New card</span>
                <button className="done-button" type="submit">Done</button>
            </div>
            <label className="cardName-label">
                <span className="input-label">Card name</span>
                <input
                    placeholder="Add name to your card"
                    className="cardName-input"
                    type="text"
                />
            </label>
            <WordCardsList/>
        </div>
    );
}
