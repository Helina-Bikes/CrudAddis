import React, { useRef, useState } from 'react';
// import '../Modal.css'
import { useDispatch } from 'react-redux';
import { addMusic } from '../redux/action';
import { css } from '@emotion/css';


const AddMusic = ({ show, onClose }) => {
 const dispatch = useDispatch();

    const [data, setData] = useState()
    const title = useRef()
    const image = useRef()
    const relesedate = useRef()
    const artist = useRef()
    const genre = useRef()

    const handleinputChange = (event) => {
        setData({
            title: title.current.value,
            artist: artist.current.value, 
            image: image.current.value,
            date: relesedate.current.value, 
            genre: genre.current.value
        })
    }
    const Handleaddmusic =  () => {
        dispatch(addMusic(data));
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
                         `}>ADD NEW MUSIC</h1>
                        <div className={css`
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
                                `} onChange={handleinputChange} ref={title} type="text" name='title' required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label className={css`
                                 font-weight: bold;
                                `} htmlFor="artist">Artist Name</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleinputChange} ref={artist} type="text" name='artist' required />
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label className={css`
                                 font-weight: bold;
                                `} htmlFor="genre">Genre</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleinputChange} ref={genre} type="text" name='genre' required/>
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label className={css`
                                 font-weight: bold;
                                `} htmlFor="date">Relese Date</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleinputChange} ref={relesedate} type="date" name='date' required/>
                            </div>
                            <div className={css`
                             margin-bottom: 10px;
                            `}>
                                <label className={css`
                                 font-weight: bold;
                                `} htmlFor="image">IMAGE URL</label>
                                <input className={css`
                                width: 97%;
                                padding: 5px;
                                border-radius: 3px;
                                border: 1px solid #838181;
                                `} onChange={handleinputChange} ref={image} type="text" name='image' required />
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
                                `} onClick={()=>Handleaddmusic()}>Add</button>
                                <button className={css`
                                padding: 8px 46px;
                                border-radius: 3px;
                                border: none;
                                cursor: pointer;
                                background-color: #827e7e;
                                color: black;
                                `} onClick={onClose}>cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}
export default AddMusic