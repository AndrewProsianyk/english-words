import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeWord} from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid';
import {getVisibleWords} from '../../redux/selectors'
import './WordList.scss';

export default function WordList() {
    const words = useSelector(getVisibleWords)
    const dispatch = useDispatch()
    return (
        <ul>
            {words.length > 0 ? words.map(word => {
                return (
                    <li key={uuidv4()}
                        className="list-item"
                    >
                        <span>{word.eng}</span>
                        <span>{word.ua}</span>
                        <button
                            onClick={() => dispatch(removeWord(word.id))}
                            type="button" className="del-button">X</button>
                    </li>
                )
            }) : null
            }
        </ul>
    );
};