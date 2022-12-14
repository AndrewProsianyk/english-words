import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getAllThemes } from '../../redux/themes/themes-selectors';
import wordsOperations from '../../redux/words/words-operations'
import { useSelector, useDispatch } from 'react-redux';
import { getThemeWords, getIsFetchingThemeWords } from '../../redux/words/words-selectors';

export default function ThemePage() {
    const { themeId } = useParams()
    const dispatch = useDispatch()
    const isFetchingWords = useSelector(getIsFetchingThemeWords)

    const words = useSelector(getThemeWords)

    useEffect(() => {
          dispatch(wordsOperations.getThemeWords(themeId))
    }, [dispatch])

    const theme = useSelector(getAllThemes).find(theme => theme._id === themeId)
    

    return (
        <div>
            <h1>{theme.name}</h1>
            {isFetchingWords ? <p>LOADING............</p>
            : 
            words.length > 0 ? words.map(word => <p key={word._id}>{word.eng}---{word.ua}</p>)
            : null}
        </div>
    )
}