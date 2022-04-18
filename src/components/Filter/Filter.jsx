import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../redux/actions'
import {getFilter} from '../../redux/selectors'

import './Filter.scss'


export default function Filter() {  
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    return (
        <>
            <label className="label"><span className="search-label">Search</span>
                <input
                    className="search-input"
                    type="text"
                    value={value}
                    onChange={(e)=>dispatch(filterChange(e.target.value))}
                />
            </label>
        </>
    );
};