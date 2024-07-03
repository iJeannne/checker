import React, { useEffect, useState } from 'react';
import './XKCDComic.css';

interface Comic {
    title: string;
    img: string;
    alt: string;
}

const XKCDComic: React.FC = () => {
    const [comic, setComic] = useState<Comic | null>(null);

    useEffect(() => {
        fetch('https://xkcd.com/info.0.json')
            .then(response => response.json())
            .then(data => {
                setComic({
                    title: data.title,
                    img: data.img,
                    alt: data.alt
                });
            });
    }, []);

    return (
        <div id="mainbl" className="flex-container">
            <h1>My XKCD Comic</h1>
            <div id="comic-info" className="flex-container">
                {comic ? (
                    <>
                        <h2 id="title">{comic.title}</h2>
                        <img id="comimg" src={comic.img} alt={comic.alt} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <button id="but" className="button-back">
                <a className="button-back" href="/">go back</a>
            </button>
        </div>
    );
};

export default XKCDComic;
