import {useState, React, useEffect} from 'react'
import GridButton from '../../components/GridButton/GridButton'
import SortSelect from '../../components/SortSelect/SortSelect'
import ThemesList from '../../components/ThemesList/ThemesList'
import Filter from '../../components/Filter/Filter'
import './FlashcardsPage.scss'


export default function FlashcardsPage() {
    const [column, setColumn] = useState(() => JSON.parse(window.localStorage.getItem('column')) ?? false)
    
    

    useEffect(() => {
        const changeBtn = document.querySelector('.themes-list')
        if (column) {
            changeBtn.classList.add('column')
        } else {
            changeBtn.classList.remove('column')
        }
        window.localStorage.setItem('column', JSON.stringify(column))
    }, [column])
    
    const cardsDisplay = () => {
        setColumn(!column)
    }
    
    return (
        <div className="flashCard-page container">
            <Filter/>
            <div className="display-menu">
                <SortSelect />
                <GridButton cardsDisplay={cardsDisplay} column={column} />
            </div>
            <ThemesList column={column} />
        </div>
    );
}
