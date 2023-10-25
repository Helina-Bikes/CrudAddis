import React from "react";
import Card from "./card";
const Home = () => {
    const music = [
        { title: "town", src: "town-10169.mp3", date: "20-2023" },
        { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
        { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
        { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
        { title: "town", src: "town-10169.mp3", date: "20-2023" },
        { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
        { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
        { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
        { title: "town", src: "town-10169.mp3", date: "20-2023" },
        { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
        { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
        { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
        { title: "town", src: "town-10169.mp3", date: "20-2023" },
        { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
        { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
        { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" },
        { title: "town", src: "town-10169.mp3", date: "20-2023" },
        { title: "toy-story-short-happy", src: "toy-story-short-happy-audio-125627.mp3", date: "10-2023" },
        { title: "chilled-acoustic", src: "chilled-acoustic-indie-9648.mp3", date: "12-2023" },
        { title: "forest-story", src: "forest-story-9713.mp3", date: "22-2023" }
    ]
    console.log(music[0].src);
    return (
        <div className="home">
            <div className="container">

            {
                music.map((mus) => 
                    <Card music={mus} />
                )
            }
            </div>

        </div>
    )
}

export default Home