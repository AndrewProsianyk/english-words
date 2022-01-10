import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import base from '../../base.json';
import './WordList.scss';

export default function WordList() {
    return (
        <ul>
            {base.map(item => {
                return (
                    <li key={uuidv4()}
                        className="list-item"

                    >
                        <span>{ item.eng}</span>
                        <span>{item.ua}</span>
                        <button type="button" className="del-button">X</button>
                    </li>
                )
            })}
        </ul>
    )
}