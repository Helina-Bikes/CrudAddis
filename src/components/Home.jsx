import React from "react";
import Sidebar from './Sidebar';
import Footer from './Foter';
import Musics from "./musics";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import { searchMusic } from "../redux/selectedAction";
import { useDispatch } from "react-redux";


const Home = () => {
    const music = useSelector((state) => state.selectedMusic)
    const defmusic = useSelector((state) => state.MusicReducer)
    const dispatch = useDispatch()
    return (
        <div className={css`
            margin: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgb(0, 0, 0);
            opacity: 0.8;
            display: flex;
            box-shadow: 0px 13px 20px 70px rgba(90, 219, 255, 0.4);
        `}>
            <Sidebar />
            <div className={css`
              display: flex;
              flex-direction: column;
              width: 100%;
            `}>
                <div className={css`
                 width: 100%;
                 height: 40vh;
                 display:flex;
                 justify-content: space-between;
                 align-items:center;
                 gap:10px;
                `}>
                    <img className={css`
                    width: 50%;
                    height: 30vh;
                    border-radius:30px;
                    margin-left:30px;
                    `} src={music[0]?.image ? music[0]?.image : defmusic[1]?.image} alt="Not found" />

                    <div className={css`
                     color:rgb(238, 240, 242);
                     background-color:rgb(100, 105, 114);
                     width:40%;
                     height:30vh;
                     display: flex;
                     flex-direction: column;
                     justify-content: center;
                     border-radius: 30px;
                     margin-right:30px;
                     padding-left: 20px;
                    `}>
                        <label className={css`
                        font-size: 18px;
                        `} for="search">Search music</label>
                        <input className={css`
                            background: transparent;
                            background-color:white;
                            color: gray;
                            border: none;
                            border-radius:10px;
                            padding:10px;
                            // border-bottom:1px solid #fff;
                            width: 75%;
                            font-size: 18px;
                            margin:10px 0px ;
                            &:focus{
                                outline: none;
                            }
                         `} type="text" placeholder="Search by song title / artist" onChange={(event) => dispatch(searchMusic(event.target.value))} />
                    </div>
                </div>
                <Musics />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
