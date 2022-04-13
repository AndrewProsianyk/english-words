import React from 'react';
import './BasePage.scss';
import WordList from '../../components/WordList/WordList';
import Filter from '../../components/Filter/Filter';



export default function BasePage() {
    return (
        <div className="container">
            <div className="base-page">
                <Filter/>
                <WordList/>
            </div>
        </div>
    )
}