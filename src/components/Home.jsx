import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import Footer from './Foter';
import Musics from "./musics";
import { useSelector } from "react-redux";
// import { css } from "@emotion/react";
import { css } from "@emotion/css";

// "https://storage.googleapis.com/support-forums-api/attachment/thread-167859106-11127461031061801732.png" 
const Home = () => {
    const music = useSelector((state) => state.selectedMusic)
    console.log("this is the selected music from home ", music);
    // const music = useSelector((state) => state.MusicReducer)
    // console.log("this is from home page", music);

    return (
        <div className={css`
            margin: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgb(0, 0, 0);
            opacity: 0.8;
            display: flex;
            // border-radius: 40px;
            box-shadow: 0px 13px 20px 70px rgba(90, 219, 255, 0.4);
            
        `}>
            <Sidebar />
            <div className={css`
              display: flex;
              flex-direction: column;
              width: 100%;
            //   border-radius: 40px;
             
            `}>
                <div className={css`
                 width: 100%;
                 height: 45vh;
                //  border-radius: 40px;
                `}>
                    <img className={css`
                    width: 100%;
                    height: 45vh;
                    // border-radius:0px 40px 0px 0px;
                    `} src={music[0]?.image ? music[0]?.image : "https://storage.googleapis.com/support-forums-api/attachment/thread-167859106-11127461031061801732.png"} alt="Not found" />
                </div>
                <Musics />
            </div>
            <Footer />
        </div>
    );
};

export default Home;























// import React, { useEffect, useState } from "react";
// import Sidebar from './Sidebar';
// import Footer from './Foter';
// import { Icon } from '@iconify/react';
// import UpdateMusic from "./update";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSelector , useDispatch} from "react-redux";
// import { MusicList } from "../redux/action";

// const Home = () => {
//     const [userResponse, setUserResponse] = useState('');

//     const musicPerPage = 5; // Number of items to display per page

//   const music = useSelector((state)=> state.MusicReducer)
//   console.log("this is from home page",music);

//     const dispatch =useDispatch();

//     useEffect(()=>{
//         dispatch(MusicList())
//     },[])

//     const [currentPage, setCurrentPage] = useState(1);

//     const totalMusicPages = Math.ceil(music.length / musicPerPage);
//     const startIndex = (currentPage - 1) * musicPerPage;
//     const endIndex = startIndex + musicPerPage;
//     const displayedMusic = music.slice(startIndex, endIndex);

//     const [showUpdateModal, setShowUpdateModal] = useState(false);

//     const handleShowUpdateModal = () => {
//         setShowUpdateModal(true);
//         console.log("This is from update");
//     };

//     const handleCloseUpdateModal = () => {
//         setShowUpdateModal(false);
//     };

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };


//     const handleDelete = () => {
//         // Display a confirmation toast
//         toast.info('Are you sure you want to delete this item?', {
//             position: toast.POSITION.TOP_CENTER,
//             autoClose: false,
//             closeOnClick: false,
//             draggable: false,
//             closeButton: true,
//             onClose: () => {
//                 // Perform delete action based on user response
//                 if (userResponse === 'yes') {
//                     deleteItem();
//                 }
//             },
//             render: ({ closeToast }) => (
//                 <div>
//                     <span>Are you sure you want to delete this item?</span>
//                     <button onClick={() => handleConfirm('yes', closeToast)}>Yes</button>
//                     <button onClick={() => handleConfirm('no', closeToast)}>No</button>
//                 </div>
//             ),
//         });
//     };

//     const handleConfirm = (response, closeToast) => {
//         setUserResponse(response);
//         closeToast();
//     };

//     const deleteItem = () => {
//         console.log("Item Deleted");
//     }
//     return (
//         <div className="home">
//             <UpdateMusic show={showUpdateModal} onClose={handleCloseUpdateModal} music={music} />
//             <Sidebar />
//             <div className="home-main">
//                 <div className="homeheader">
//                     <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-167859106-11127461031061801732.png" alt="Not found" />
//                 </div>
//                 <div className="homefooter">
//                     {displayedMusic.map((musicItem) => (
//                         <div className="musicdiv">
//                             <div className="text">
//                                 <img src={musicItem.image} alt="not found" />
//                                 <div>
//                                     <h3>{musicItem. title}</h3>
//                                     <p>{musicItem.date}</p>
//                                 </div>
//                             </div>
//                             <div className="icons">
//                                 <Icon className="indIcon" icon="zondicons:play-outline" />
//                                 <Icon className="indIcon" icon="mdi:heart-outline" />
//                                 <Icon className="indIcon" onClick={handleShowUpdateModal} icon="mdi:edit-outline" />
//                                 <Icon className="indIcon" onClick={handleDelete} icon="uiw:delete" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="pagination">
//                     {Array.from({ length: totalMusicPages }, (_, index) => (
//                         <button
//                             key={index + 1}
//                             onClick={() => handlePageChange(index + 1)}
//                             className={currentPage === index + 1 ? "active" : ""}
//                         >
//                             {index + 1}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//             <ToastContainer />
//         </div>
//     );

// };

// export default Home;




















































// const music = [
//     { title: "town", src: "town-10169.mp3", date: "20-2023" },
//     { title: "toy-story", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
//     { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
//     { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
//     { title: "town", src: "town-10169.mp3", date: "20-2023" },
//     { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
//     { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
//     { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
//     { title: "town", src: "town-10169.mp3", date: "20-2023" },
//     { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
//     { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
//     { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
//     { title: "town", src: "town-10169.mp3", date: "20-2023" },
//     { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
//     { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
//     { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
//     { title: "town", src: "town-10169.mp3", date: "20-2023" },
//     { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
//     { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
//     { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" }
// ]
