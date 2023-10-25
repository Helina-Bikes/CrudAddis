import React from "react";

const Card = (music) => {
    console.log(music.music.title);
    return (

        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{music.music.title}</h2>
            </div>
            <div className="card-image">
                <img src="image.jpg" alt="Image not found" />
            </div>

            <div className="card-footer">
               
                 <p className="card-date">{music.music.date}</p>
                <audio src={music.music.src} controls className="card-audio" />
                <div className="btn">
                    <button>update</button>
                    <button>Delete</button>
                </div>
            </div>

        </div>
        
    )
}
export default Card