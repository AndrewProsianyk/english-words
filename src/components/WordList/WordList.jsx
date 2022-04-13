import React from 'react';
import { connect } from 'react-redux';
import {removeWord} from '../../redux/actions'

import { v4 as uuidv4 } from 'uuid';

import './WordList.scss';


function WordList({onRemoveWord, words}) {
    console.log(words)
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

const mapStateToProps = state => ({
    words:state.words
})

const mapDispatchToProps = dispatch => ({
    onRemoveWord: id => dispatch(removeWord(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WordList)