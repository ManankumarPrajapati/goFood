import React from "react";
import Navbar from "../component/Navbar";
import Main from "../component/Main";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
