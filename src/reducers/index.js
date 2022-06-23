import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Shape of You', duration: '3:45'},
        { title: 'FRIENDS', duration: '4:25'},
        { title: '2002', duration: '5:06'},
        { title: 'See You Again', duration: '5:45'},
        { title: 'Roar', duration: '6:08'}
    ];
};


const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});