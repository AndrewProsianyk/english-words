import React from 'react'
import { Link} from 'react-router-dom';
import './ThemesList.scss'
import Theme from '../Theme/Theme';
import { getAllThemes } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export default function ThemesList({ column }) {
    const themes = useSelector(getAllThemes)

    return (
        <div column={column} className="themes-list">
            <Link
                to="/flashcards/new-theme"
                className="newTheme"
            >
                <svg className="plus-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 22C6.97967 21.994 2.50606 17.5204 2.5 12V11.8C2.60993 6.30455 7.13459 1.92797 12.6307 2.0009C18.1268 2.07382 22.5337 6.5689 22.4978 12.0654C22.4619 17.5618 17.9966 21.9989 12.5 22ZM8.5 11C7.94772 11 7.5 11.4477 7.5 12C7.5 12.5523 7.94772 13 8.5 13H11.5V16C11.5 16.5523 11.9477 17 12.5 17C13.0523 17 13.5 16.5523 13.5 16V13H16.5C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11H13.5V8.00002C13.5 7.44773 13.0523 7.00002 12.5 7.00002C11.9477 7.00002 11.5 7.44773 11.5 8.00002V11H8.5Z" fill="#7F809B" />
                </svg>
                <span className="link-text">Add new theme</span>
            </Link>
            {themes.length > 0 ? themes.map(theme => {
                return (
                    <Theme name={theme.name} key={theme.id} path={theme.id}/>
                )
            }) : null
            }
        </div>
    );
}
// ${url}