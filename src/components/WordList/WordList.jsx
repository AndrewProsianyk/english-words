import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './WordList.scss';

export default function WordList() {
    const [list, setList]= useState(()=>JSON.parse(window.localStorage.getItem('wordList')))
useEffect(() => {
    window.localStorage.setItem('wordList',JSON.stringify(list))
}, [list])
    
const deleteWord = eng => {
    setList(prevState =>prevState.filter(word=>word.eng!==eng))
  }
    return (
        <ul>
            {list.map(item => {
                return (
                    <li key={uuidv4()}
                        className="list-item"
                    >
                        <span>{item.eng}</span>
                        <span>{item.ua}</span>
                        <button onClick={deleteWord} type="button" className="del-button">X</button>
                    </li>
                )
            })}
        </ul>
    )
}