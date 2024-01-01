import React, { useState } from "react";

const Carousel = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "cover" }}
      >
        <div className="carousel-inner" style={{ height: "30rem" }}>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×300/?burger"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness()30%",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?pizza"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?pastry"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div
          className="d-flex"
          style={{ position: "absolute", left: "14rem", width: "60rem" }}
        >
          <input
            className="form-control me-2 bg-white"
            type="search"
            placeholder="Search Your Favourite Food"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
