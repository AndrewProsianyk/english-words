import React from 'react';
import './AddWordPage.scss'
import AddForm from '../../components/AddForm/AddForm';

export default function AddWordPage() {
    return (
        <div className="container">
            <div className="add-page">
                <h1 className="page-title">Enter the word</h1>
                <AddForm/>
           </div>
        </div>
    )
}