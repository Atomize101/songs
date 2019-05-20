import {combineReducers} from 'redux';


const songsReducer = () => {
    return [
        {title: 'Basket Case', duration: '3:04'},
        {title: 'Macarena', duration: '2:45'},
        {title: 'Mr Piano man', duration: '6:25'},
        {title: 'Mary had a little lamb', duration: '2:08'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});