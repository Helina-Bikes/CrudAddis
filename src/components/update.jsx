import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateMusic } from '../redux/action';
import { css } from '@emotion/css';

const UpdateMusic = ({ show, onClose }) => {
    const music = useSelector((state) => state.selectedMusic)
    console.log("this is the selected music from update ", music[0]?.artist);

    const dispatch = useDispatch()
    const [updatemusic, setUpdatemusic] = useState()
    const title = useRef()
    const duration = useRef()
    const image = useRef()
    const relesedate = useRef()
    const artist = useRef()
    const genre = useRef()

    const handleInputChane = () => {
        setUpdatemusic({
            id: music[0]?.id,
            title: title.current.value,
            artist: artist.current.value,
            image: image.current.value,
            date: relesedate.current.value,
            genre: genre.current.value,
            duration:duration.current.value
        })
    }
    const handleupdate = () => {
     dispatch(updateMusic(updatemusic));
      onClose()
    }
    return (
        <>
            {show && (
                <div className={css`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 999999;
                `}>
                    <div className={css`
                     background-color: rgb(185, 184, 184);
                     padding: 20px;
                     border-radius: 5px;
                     max-width: 400px;
                     color: black;
                     z-index: 9999;
                    
                    `}>
                        <h1 className={css`
                         font-size: 24px;
                         margin-bottom: 20px;
                         `}>
                            UPDATE MUSIC</h1>
                        <form onSubmit={() => handleupdate()} className={css`
                         display: flex;
                         flex-direction: column;
                        `}>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label className={css`
                                 font-weight: bold;
                                `} htmlFor="title">Title</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleInputChane} ref={title} type="text" name='title' defaultValue={music[0]?.title} required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label  className={css`
                                 font-weight: bold;
                                `} htmlFor="artist">Artist Name</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleInputChane} ref={artist} type="text" name='artist' defaultValue={music[0]?.artist} required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label  className={css`
                                 font-weight: bold;
                                `} htmlFor="genre">Genre</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleInputChane} ref={genre} type="text" name='genre' defaultValue={music[0]?.genre} required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label  className={css`
                                 font-weight: bold;
                                `} htmlFor="duration">Duration</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleInputChane} ref={duration} type="text" name='duration' defaultValue={music[0]?.duration} required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label  className={css`
                                 font-weight: bold;
                                `} htmlFor="date">Relese Date</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleInputChane} ref={relesedate} type="date" name='date' defaultValue={music[0]?.date} required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label  className={css`
                                 font-weight: bold;
                                `} htmlFor="image">URL FOR POSTER IMAGE</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleInputChane} ref={image} type="text" name='image' defaultValue={music[0]?.image} required />
                            </div>
                            <div className={css`
                             width: 100%;
                             display: flex;
                             justify-content: space-between;
                             margin-top: 20px;
                             gap: 30px;
                            `}>
                                <button className={css`
                                padding: 8px 46px;
                                border-radius: 3px;
                                border: none;
                                cursor: pointer;
                                background-color: #2c852f;
                                color: white;

                                `} type='submit'>Save</button>
                                <button className={css`
                                padding: 8px 46px;
                                border-radius: 3px;
                                border: none;
                                cursor: pointer;
                                background-color: #827e7e;
                                color: black;
                                `} onClick={onClose}>cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>

    )
}
export default UpdateMusic