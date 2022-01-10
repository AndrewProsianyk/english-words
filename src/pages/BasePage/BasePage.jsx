import React from 'react';
import './BasePage.scss';
import WordList from '../../components/WordList/WordList';



export default function BasePage() {
    return (
        <div className="container">
            <div className="base-page">
                <label className="label"><span className="search-label">Search</span>
                    <input className="search-input" type="text" />
                </label>
                <WordList/>
            </div>
        </div>
    )
}