import React, { useState } from 'react';
import './Filter.scss'


export default function Filter() {
    const [filter, setFilter] = useState('')
    
    const filterChange = e => {
        setFilter(e.currentTarget.value)
    }    
   

    return (
        <>
            <label className="label"><span className="search-label">Search</span>
                <input
                    className="search-input"
                    type="text"
                    value={filter}
                    onChange={filterChange}
                />
            </label>
        </>
    );
}