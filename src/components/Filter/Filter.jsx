import React from 'react';
import { connect } from 'react-redux';
import {filterChange} from '../../redux/actions'

import './Filter.scss'


const Filter = ({value, onChange}) => {   
   
    return (
        <>
            <label className="label"><span className="search-label">Search</span>
                <input
                    className="search-input"
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    );
}

const mapStateToProps = state => ({
    value: state.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(filterChange(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);