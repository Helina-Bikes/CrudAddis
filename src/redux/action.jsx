import {MUSIC_LIST, ADD_MUSIC,DELETE_MUSIC,UPDATE_MUSIC,LIKED_MUISC, SELECTED_MUSIC } from "./constant";

export const MusicList = ()=>{

    return{
        type:MUSIC_LIST,
    }
}

export const addMusic = (data)=>{
    return{
        type:ADD_MUSIC,
        data
    }

}

export const updateMusic =(data)=>{
    return{
        type:UPDATE_MUSIC,
        data
    }
}



export const likedMusic =(data)=>{
    return{
        type:LIKED_MUISC,
        data
    }
}
// export const selectedMusic = (data) =>{
//     console.log("this is from the selected Action",data);
//     return{
//         type:SELECTED_MUSIC,
//         data
//     }
// }