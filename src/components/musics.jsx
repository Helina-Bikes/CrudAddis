import React, { useEffect, useState } from "react";
import UpdateMusic from "./update";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from "react-redux";
import { MusicList } from "../redux/action";
import { musicTOUpdate, selectedMusic,deleteMusic, searchMusic } from "../redux/selectedAction";
import { css } from "@emotion/css";

const Musics = () => {
    const musicPerPage = 3;

    const music = useSelector((state) => state.MusicReducer)
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MusicList())
    }, [])

    const [currentPage, setCurrentPage] = useState(1);

    const totalMusicPages = Math.ceil(music.length / musicPerPage);
    const startIndex = (currentPage - 1) * musicPerPage;
    const endIndex = startIndex + musicPerPage;
    const displayedMusic = music.slice(startIndex, endIndex);

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleShowUpdateModal = (music) => {
        dispatch(musicTOUpdate(music))
        setShowUpdateModal(true);
        console.log("This is from update");
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
           setTimeout(() => {
               window.location.reload()
           }, 1000);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = (id) => {
        const userResponse = window.confirm('Are you sure you want to delete this item?');
        if (userResponse) {
           dispatch(deleteMusic(id))
           setTimeout(() => {
               window.location.reload()
           }, 1000);
        }

    };

    const handleselect = (music) => {
        dispatch(selectedMusic(music))
    }


    return (
        <>

            <UpdateMusic show={showUpdateModal} onClose={()=>handleCloseUpdateModal()} music={music} />
            <div className={css`
                            width: 100%;
                            height: 55vh;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            flex-wrap: wrap;
                            gap: 5px;
                            margin-top:5px;
            `}>
               
                {displayedMusic?.map((musicItem) => (
                    <div key={musicItem?.id} className={css`
                            width: 100%;
                            height: 15%;
                            color: white;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 10px;
                            background-color: rgb(0, 0, 0);
                            opacity: .8;
                            &:hover{
                                transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 2);
                                box-shadow: 10px 13px 40px 1px rgba(43, 215, 106, 0.4);
                            }
                    `}>
                        <div className={css`
                                display: flex;
                                gap: 20px;
                               
                        `}>
                            <img className={css`
                             width: 100px;
                             height: 60px;
                             border-radius: 10px;
                            `} src={musicItem?.image} alt="not found" />
                            <div className={css`
                                display: flex;
                                flex-direction: column;
                                align-items: center; 
                            `}>
                                <h3 className={css`
                                    margin: 0;
                                    font-size: 15px;
                                `}>{musicItem?.title}</h3>
                                <p className={css`
                                    margin: 0;
                                    font-size: 15px;
                                `}>{musicItem?.date}</p>
                            </div>
                        </div>
                        <div className={css`
                            display: flex;
                            gap:20px;
                            margin-right: 40px;
                        `}>
                            <Icon onClick={() => handleselect(musicItem)} className={css`
                            cursor: pointer;
                            &:hover{
                                border-radius: 100%;
                                background-color: rgb(138, 224, 246);
                                transition: all 0.8s cubic-bezier(0.175, 0.885, 4, 2);
                            }
                            `} icon="icon-park-solid:play" />
                            <Icon className={css`
                            cursor: pointer;
                            `} onClick={() => handleShowUpdateModal(musicItem)} icon="mdi:edit-outline" />
                            <Icon className={css`
                            cursor: pointer;
                            `} onClick={()=>handleDelete(musicItem.id)} icon="uiw:delete" />
                        </div>
                    </div>
                ))}
            </div>
            <div className={css`
                        padding: 5px;
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        align-items: center;
                        width: 50%;
                        position: absolute;
                        bottom: 113px;
                        left: 0;
                        right: 0;
                        margin:auto;
            `}>
                {Array.from({ length: totalMusicPages }, (_, index) => (
                    <button 
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={css`
                            background-color: #070707;
                            width: 30px;
                            height: 25px;
                            border: none;
                            color: white;
                        `}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </>

    )
}
export default Musics


