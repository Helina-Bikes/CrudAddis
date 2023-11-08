import React, { useState } from "react";
import AddMusic from "./AddMusic";
import { Icon } from "@iconify/react";
import { css } from "@emotion/css";
const Sidebar = () => {
    const [showmodal, setshowmodal] = useState(false)
    const showADD = () => {
        setshowmodal(true)
    }
    function closemodal (){
        setshowmodal(false)
    }
    return (
        <>
         <AddMusic show={showmodal} onClose={closemodal} />
        <div className={css`
         width:15%;
         height: 100%;
         display: flex;
         flex-direction: column;
         background-color: rgb(0, 0, 0);
         align-items: center;
         color: white;
         border-radius:30px 0px 0px 30px;
         box-shadow: 40px 0px 40px -30px rgba(157, 193, 170, 0.4);
         opacity: .8;
        `}>
            <img className={css`
            width: 100%;
            border-radius:30px 0px 0px 0px;
            `} src="https://i.imgur.com/pqoF3SN.jpg" alt="my music logo"/>
            <h3>Home</h3>
            <button className={css`
            background-color: rgba(213, 176, 25, 0.618);
            padding:5px ;
            border: none;
            border-radius: 8px;
            color: white;
            width: 84%;
            align-items: center;
            `} onClick={()=>showADD()}>Add Music 
            <Icon className={css`
             margin-left: 20px;
             align-self: center;
            `} icon="ic:twotone-plus" /> 
            </button>
           
        </div>
        </>
    )
}

export default Sidebar




