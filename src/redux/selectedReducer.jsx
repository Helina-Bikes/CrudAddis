import { MUSIC_TO_UPDATE, SELECTED_MUSIC, SET_MUSIC_LIST,DELETE_MUSIC } from "./constant";
export const selectedMusic = (data = [], action) => {
    console.log("selected reducer", action);
    console.log("selected reducer data", data);
    switch (action.type) {
        case SELECTED_MUSIC:
            console.log("seting music List", action);
            return [action.data]
        case MUSIC_TO_UPDATE:
            console.log("the updating music data", action);
            return [action.data]
        case DELETE_MUSIC:
            console.warn("nusic deleted", action);
        default:
            return data
    }
}