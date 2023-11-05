import React from "react";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
const Footer = () => {
    const music = useSelector((state) => state.selectedMusic)
    console.log("this is the selected music from footer ", music[0]?.artist);
    return (
        <div className={css`
        width: 100%;
        background: rgb(0, 0, 0);
        height: 100px;
        opacity: .9;
        /* z-index: 2; */
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // border-radius:0px 0px 40px 40px;
        background-color: rgb(2, 0, 12);
      
        box-shadow: 40px 40px 40px -30px rgba(109, 246, 159, 0.4);
        
        `}>
            <div className={css`
             color: white;
             align-items: center;
             display: flex;
             gap: 20px;
             padding: 20px;
             float: left;
            
            `}>
                <img className={css`
                 width: 100px;
                 height: 80px;
                 border-radius:10px;
                `} src={music[0]?.image ? music[0]?.image : "https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4121.jpg?w=1060"} alt="image not found"></img>
                <div className={css`
                 display: flex;
                 flex-direction: column;
                `}>
                    <h3 className={css`
                    margin: 0px ;
                    font-size: 15px;
                    `}>{music[0]?.title ? music[0]?.title : "Music Title"}</h3>
                    <h6 className={css`
                    margin: 0px ;
                    font-size: 15px;
                    `}>{music[0]?.artist ? music[0]?.artist : "Artist Name"}</h6>
                </div>
            </div>
            <audio
  className={css`
    width: 75%;
    margin-right: 50px;
    // padding-bottom: 20px;
    // height: 60px;
    // background-color: rgb(0, 0, 0);
    // border-radius: 30px;
    // border: 2px solid #e1e1e1;
    // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    // outline: none;
  `}
  controls
  src=""
  type="audio/ogg"
/>
        </div>
    )

}

export default Footer