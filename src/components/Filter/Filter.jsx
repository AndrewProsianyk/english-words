import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../redux/actions'
import { getFilter } from '../../redux/selectors'
import { getCurrentUserName } from '../../redux/auth/user-selectors';


import './Filter.scss'


export default function Filter() {  
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    const userName = useSelector(getCurrentUserName)
    console.log(userName)
    return (
        <div className="filter-section">
            <h2 className="main-title">Hello, {userName? userName : 'User'}</h2>
            <p className="title-subtext">What are you studying today?</p>
            <label className="label">
                <svg className="input-icon" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0278 9.52893L13.7937 13.2948C13.9261 13.4273 14.0004 13.6069 14.0003 13.7942C14.0003 13.9814 13.9258 14.161 13.7934 14.2934C13.6609 14.4257 13.4813 14.5001 13.294 14.5C13.1068 14.4999 12.9272 14.4255 12.7948 14.293L9.02892 10.5271C7.90315 11.3991 6.48747 11.8094 5.0699 11.6746C3.65232 11.5399 2.33933 10.8701 1.39803 9.80165C0.456724 8.73318 -0.0421846 7.34624 0.00279737 5.92299C0.0477794 4.49973 0.633273 3.14707 1.64017 2.14017C2.64707 1.13327 3.99973 0.547779 5.42299 0.502797C6.84624 0.457815 8.23318 0.956724 9.30165 1.89803C10.3701 2.83933 11.0399 4.15233 11.1746 5.5699C11.3094 6.98748 10.8991 8.40315 10.0271 9.52893H10.0278ZM5.6004 10.2996C6.71428 10.2996 7.78255 9.85712 8.57018 9.06948C9.35782 8.28185 9.80031 7.21358 9.80031 6.0997C9.80031 4.98581 9.35782 3.91755 8.57018 3.12992C7.78255 2.34228 6.71428 1.89979 5.6004 1.89979C4.48651 1.89979 3.41825 2.34228 2.63062 3.12992C1.84298 3.91755 1.40049 4.98581 1.40049 6.0997C1.40049 7.21358 1.84298 8.28185 2.63062 9.06948C3.41825 9.85712 4.48651 10.2996 5.6004 10.2996Z" fill="#0B0C27" />
                </svg>
                <input
                    placeholder="Search your theme"
                    className="search-input"
                    type="text"
                    value={value}
                    onChange={(e) => dispatch(filterChange(e.target.value))}
                />
            </label>
        </div>
    );
}
