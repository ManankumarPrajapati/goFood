import React, { useEffect, useState } from "react";
import "./Main.css";
import Card from "./Card";
import Carousel from "./Carousel";

const Main = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "cover" }}
      >
        <div className="carousel-inner" style={{ height: "30rem" }}>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Your Favourite Food"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
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
      </div>
      <div className="container">
        {foodCat !== null
          ? foodCat.map((item) => {
              return (
                <div key={item._id} className="row mb-3">
                  <div className="m-3 fs-3">{item.CategoryName}</div>
                  <hr />
                  {foodItem !== null ? (
                    foodItem
                      .filter(
                        (data) =>
                          data.CategoryName === item.CategoryName &&
                          data.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div className="col-md-6 " key={filterItems._id}>
                            <Card
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div> No Data has Found</div>
                  )}
                </div>
              );
            })
          : null}
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default Main;
