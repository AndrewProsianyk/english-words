import { useState } from 'react'
import './SortSelect.scss'


export default function SortSelect() {
    const [select, setSelect] = useState(false)

    const toggleSelect = () => {
        setSelect(!select)
    }

    return (
        <div className="select">
            <button className="sort-button" onClick={toggleSelect}>
                <span className="sortButton-text">Sort by</span>
                {!select ? <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99999 7.71302L11.3036 2.40941C11.6938 2.0192 11.694 1.38662 11.3041 0.996141C10.9137 0.605178 10.2802 0.605057 9.88961 0.995871L5.99999 4.88802L2.11087 0.995516C1.72052 0.60483 1.08732 0.604691 0.696807 0.995208C0.306433 1.38558 0.306407 2.01849 0.696748 2.4089L5.99999 7.71302Z" fill="#7F809B" />
                </svg>
                    : <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99983 -1.19209e-05L0.696212 5.3036C0.306005 5.69381 0.305781 6.32639 0.695711 6.71687V6.71687C1.08612 7.10784 1.71965 7.10796 2.11021 6.71714L5.99983 2.82499L9.88895 6.7175C10.2793 7.10818 10.9125 7.10832 11.303 6.7178V6.7178C11.6934 6.32743 11.6934 5.69452 11.3031 5.30411L5.99983 -1.19209e-05Z" fill="#7F809B" />
                    </svg>}
            </button>
            {select ?
                <ul className="sort-list">
                    <li className='sort-option'>A-Z</li>
                    <li className='sort-option'>Z-A</li>
                    <li className='sort-option'>Newest first</li>
                    <li className='sort-option'>Oldest first</li>
                </ul>
                : null}
        </div>
    );
}



    // return (
    //     <>
    //         <select placeholder='Sort by' name="select" id="" className='selectTwo'>
    //             <option value="" disabled selected hidden>Sort by</option>
    //             <option value="">a-z</option>
    //             <option value="">z-a</option>
    //             <option value="">new</option>
    //             <option value="">old</option>
    //         </select>
    //     </>
    // );