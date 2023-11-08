import { takeEvery, put } from 'redux-saga/effects'
import { ADD_MUSIC, DELETE_MUSIC, MUSIC_LIST, SEARCH_MUSIC,  SET_MUSIC_LIST, UPDATE_MUSIC } from './constant'
import axios from 'axios'


function* getmusic() {
    let data = yield fetch("https://music-5x7y.onrender.com/music")
    data = yield data.json()
    yield put({ type: SET_MUSIC_LIST, data })
}


function* add_Music(data) {
    yield axios.post("https://music-5x7y.onrender.com/music", data.data)
        .then(responce => {
            put({ type: SET_MUSIC_LIST, payload: responce.data });
        })
        .catch(data => {
            console.log(data);
        })
}

function* update_Music(data) {
    yield axios.put(`https://music-5x7y.onrender.com/music/${data.data.id}`, data.data)
        .then(responce => {
            put({ type:SET_MUSIC_LIST, payload: responce.data });
        })
        .catch(error => {
            console.error(error);
        })
}

function* delete_Music(data) {
    yield axios.delete(`https://music-5x7y.onrender.com/music/${data.data}`)
        .then(responce => {
          
        })
        .catch(error => {
            console.error(error);
        })
}

function* search_Music(data) {
    let result = yield fetch(`https://music-5x7y.onrender.com/music?q=${data.data}`)
    result = yield result.json()
    yield put({ type: SET_MUSIC_LIST, data: result })
}




function* musicsaga() {
    yield takeEvery(MUSIC_LIST, getmusic)
    yield takeEvery(ADD_MUSIC, add_Music)
    yield takeEvery(UPDATE_MUSIC, update_Music)
    yield takeEvery(DELETE_MUSIC, delete_Music)
    yield takeEvery(SEARCH_MUSIC, search_Music)
}
export default musicsaga