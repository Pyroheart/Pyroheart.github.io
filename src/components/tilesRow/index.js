import React, { useEffect, useState } from 'react'
import axios, { imageBaseUrl } from "../../services/axios"
import "./tilesrow.css"


export default function TilesRow({ title, requestUrl, topRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(requestUrl);
            // console.log('Response', response)
            setMovies(response.data.results);
        };
        getMovies();
    }, [requestUrl]);

    return (
        <div className='row-container'>
            <h2 className='row-title'>{title}</h2>

            <div className='tiles-row-container'>
                {movies.map(({ id, name, poster_path, backdrop_path, overview }) => (
                <div key={id} className="parent">
                    <img
                    className={`image-tile ${topRow && "image-tile-top-row"}`}
                    src={`${imageBaseUrl}${topRow ? poster_path : backdrop_path || poster_path}`}
                    alt={name}
                    />
                    <div className="child">
                    <span>{overview?.length > 200 ? `${overview.substring(0, 200)}...` : overview}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
