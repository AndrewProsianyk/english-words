import React from 'react';
import { connect } from 'react-redux';
import {removeWord} from '../../redux/actions'

import { v4 as uuidv4 } from 'uuid';

import './WordList.scss';


function WordList({words, onRemoveWord}) {
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
                            onClick={()=>onRemoveWord(word.id)}
                            type="button" className="del-button">X</button>
                    </li>
                )
            }): null
        }
        </ul>
    )
}

const getVisibleWords = (allWords, filter) => {
    const normalizedFilter = filter.toLowerCase();
    
    const filtered = function () {
        if (filter.match(/^[A-z]/)) {
            return allWords.filter(({ eng }) =>
                eng.toLowerCase().includes(normalizedFilter),
            );
        } else {
            return allWords.filter(({ ua }) =>
                ua.toLowerCase().includes(normalizedFilter),
            );
        }
    }
    return filtered()

//   return allWords.filter(({ eng }) =>
//     eng.toLowerCase().includes(normalizedFilter),
//   );
};

const mapStateToProps = state => ({
    words: getVisibleWords( state.words, state.filter)
})

const mapDispatchToProps = dispatch => ({
    onRemoveWord: id => dispatch(removeWord(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WordList)