export const getAllThemes = state => state.themes.themes
export const getFilter = state => state.filter

export const getFilteredThemes = state => {
    const allThemes = getAllThemes(state)
    const filter = getFilter(state)

    const normalizedFilter = filter.toLowerCase();

    return allThemes.filter(theme => theme.name.toLowerCase().includes(normalizedFilter))
};