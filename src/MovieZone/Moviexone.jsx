import React, { use, useState } from "react";
import { movies } from "./data.js";

const Moviexone = () => {
  const [movieList, setMovieList] = useState(movies);
  const filterMovie=(cato)=>{
    setMovieList(movies.filter((data)=>data.category==cato))
  }
  return (
    <>
      <div className="buttonname">
        <button type="button" onClick={()=>setMovieList(movies)} className="btn btn-dark">
          All
        </button>
        <button type="button" onClick={()=>filterMovie("Action")} className="btn btn-primary">
          Action
        </button>
        <button type="button" onClick={()=>filterMovie("Thriller")} className="btn btn-secondary">
          Thriller
        </button>
        <button type="button" onClick={()=>filterMovie("Animation")} className="btn btn-success">
          Animation
        </button>
        <button type="button" onClick={()=>filterMovie("Horror")} className="btn btn-danger">
          Horror
        </button>
        <button type="button" onClick={()=>filterMovie("Drama")} className="btn btn-warning">
          Drama
        </button>
        <button type="button" onClick={()=>filterMovie("Sci-Fi")} className="btn btn-info">
          Sci-Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "5rem",
          textAlign: "center",
          width: "70%",
          // backgroundColor:"grey",
          margin: "auto",
          paddingTop: "8rem",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "200px" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  borderRadius: "2rem",
                  border: "5px solid gray",
                }}
              />
            </div>
            <h5 style={{ marginLeft: "10px", textWrap: "wrap" }}>
              {data.title}
            </h5>
            <p>{data.release_date}</p>
            <button className="Download" >
              <a  href={data.Download}>Download</a>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Moviexone;
