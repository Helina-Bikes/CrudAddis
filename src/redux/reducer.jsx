import { MUSIC_LIST, ADD_MUSIC, DELETE_MUSIC, UPDATE_MUSIC, LIKED_MUISC, SET_MUSIC_LIST, SELECTED_MUSIC } from "./constant";
export const MusicReducer = (data = [], action) => {
    console.log("music reducer data", action);

    switch (action.type) {
        case ADD_MUSIC:
            console.warn("music added", action);
            return [action.data, ...data]
        // return 1+1
       

        case SET_MUSIC_LIST:
            console.warn("seting music List", action);
            return [...action?.data]
        // case SELECTED_MUSIC:
        //     console.log("seting music List", action);
        //     return [action.data]
        default:
            return data

    }
}