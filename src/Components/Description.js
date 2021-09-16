import React from 'react'
import { useSelector } from "react-redux";
 

function Description({match}) {
    const title = match.params.title;
    const movies = useSelector(state =>state.movies);

    const style = {
        marginTop: "50px",
        border: "10",
        borderColor: "white",
        alignText: "center",
        color: "white",
      };

    var movie = movies.find((movie) => movie.title === title)

    return (
        <div className="container border m-5" style={style}>
            <img src={movie.posterUrl} alt="film" width="500px" height="300px" />
            <h6>Title: {movie.title}</h6>
            <h6>Description : {movie.description}</h6>
            <h6>Rating : {movie.rating}</h6>
        </div>
    )
}

export default Description
