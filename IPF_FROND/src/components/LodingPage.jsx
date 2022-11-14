import React from 'react'
import logi from '../assets/logi.gif'
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';

const LodingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logi}
          alt=""
          width="200"
          height="190"
        />
        <h1 className="display-5 fw-bold">Instituto Pollito</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LodingPage