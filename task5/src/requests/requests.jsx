export const getRhymes = async (word) => {
    try {
        const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}&max=1000`);
        return await response.json();
    } catch (error) {
        console.log('Request failed', error);
    }
};
