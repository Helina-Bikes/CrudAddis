import { takeEvery, put } from 'redux-saga/effects'
import { ADD_MUSIC, DELETE_MUSIC, MUSIC_LIST, SEARCH_MUSIC, SELECTED_MUSIC, SET_MUSIC_LIST, UPDATE_MUSIC } from './constant'
import { selectedMusic } from './selectedAction'
import axios from 'axios'


function* getmusic() {
    let data = yield fetch("https://music-5x7y.onrender.com/music")
    data = yield data.json()
    console.warn("this is get saga", data);

    yield put({ type: SET_MUSIC_LIST, data })
}


function* add_Music(data) {
    console.log("this is the id k ", data.data);

    yield axios.post("https://music-5x7y.onrender.com/music", data.data)
        .then(responce => {
            console.warn('this is search saga', responce.data);
            put({ type: SET_MUSIC_LIST, payload: responce.data });
        })
        .catch(data => {
            console.log(data);
        })
}

function* update_Music(data) {
    console.log("this is the data to update ", data.data);

    yield axios.put(`https://music-5x7y.onrender.com/music/${data.data.id}`, data.data)
        .then(responce => {
            console.warn('this is update saga', responce);
            put({ type:SET_MUSIC_LIST, payload: responce.data });
        })
        .catch(error => {
            console.error(error);
        })
}

function* delete_Music(data) {
    console.log("this is the data to delete ", data.data);

    yield axios.delete(`https://music-5x7y.onrender.com/music/${data.data}`)
        .then(responce => {
            console.warn('this is search saga', responce);
            //   put({ type:SET_MUSIC_LIST, payload: responce.data });
        })
        .catch(error => {
            console.error(error);
        })
}

function* search_Music(data) {
    console.log("this is the data to search ", data.data);
    let result = yield fetch(`https://music-5x7y.onrender.com/music?q=${data.data}`)
    result = yield result.json()
    console.warn("this is search saga", result);

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