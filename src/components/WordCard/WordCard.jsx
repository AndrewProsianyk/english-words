import { useState } from 'react'
import { useDispatch } from 'react-redux'
import wordsOperations from '../../redux/words/words-operations'
import './WordCard.scss'

export default function WordCard({ themeId }) {
    const dispatch = useDispatch()
    const [eng, setEng] = useState('')
    const [ua, setUa] = useState('')
    
    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
        case 'eng':
            return setEng(value);
        case 'ua':
            return setUa(value);
        default:
            return;
        }
        
    };
    
    const submitWord = (e) => {
        e.preventDefault();
        if (eng === '' && ua === '' || eng === ''|| ua === '') {
            return
        }
        dispatch(wordsOperations.addWord({eng, ua, themeId}))
    }

    return (
        <form onBlur={submitWord} action="" className="word-card">
            <input 
                value={eng}
                name='eng'
                onChange={handleChange}
                placeholder="Term"
                className="wordCard-input"
                type="text" 
                />
            <input 
                value={ua}
                name='ua'
                onChange={handleChange}
                placeholder="Definition"
                className="wordCard-input"
                type="text" 
                />
        </form>
    )
}
