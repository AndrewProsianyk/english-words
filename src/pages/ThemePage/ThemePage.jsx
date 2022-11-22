import React from 'react'
import { useParams } from 'react-router-dom';
import { getAllThemes } from '../../redux/themes/themes-selectors';
import { useSelector } from 'react-redux';

export default function ThemePage() {
    const { themeId } = useParams()
    const theme = useSelector(getAllThemes).find(theme => theme._id === themeId)

    return (
        <div>{theme.name}</div>
    )
}