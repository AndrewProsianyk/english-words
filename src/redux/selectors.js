export const getAllWords = state => state.words
export const getFilter = state => state.filter
export const getVisibleWords = state => {
    const allWords = getAllWords(state)
    const filter = getFilter(state)

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
};
export const getAllThemes = state => state.themes
