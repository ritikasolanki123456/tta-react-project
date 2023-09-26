import React from 'react';
import './App.css';
import img from '../src/images/userimg2.jpg';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaHireAHelper } from "react-icons/fa";
import cv from './images/ritika_solanki.pdf';
const date = new Date().getFullYear();

const App = () => {
  return (
    <>
      <div className="app">
        <header>
          <h2 className="name">Ritika Solanki</h2>
          <div className="btn_div">
            <a href={cv} target="_blank" rel="noopener noreferrer" className='download_cv'>Download CV <AiOutlineCloudUpload className='wifi_icon' size={20} /></a>
            <a href="https://www.linkedin.com/in/ritika-solanki-915727273/
            " target="_blank" rel="noopener noreferrer">Hire Me
              <FaHireAHelper className='H' /></a>
          </div>
        </header>
        <section className='section_div'>
          <div className='left_div'>
            <h2>Hello this is me
              <br /> Ritika Solanki applied for <br />
              <span>Frontend Developer position</span>
            </h2>
            <p>hello welcome to the task page, here i've completed my task successfully for the
              Frontend Developer position in educademy LLP. i'm possionate and aspiring front-end developer showcasing my skills and dedication to creating engaging web experiences. </p>
            <a href="https://ritikasolanki123456.github.io/profile/" target="_blank" rel="noopener noreferrer">Visit Portfolio</a>

          </div>
          <div className='right_div'>
            <div className="img_div">
              <img src={img} alt="img1" />
            </div>
          </div>
        </section>
        <footer>
          <div>
            <h2>Ritika Solanki</h2>
            <p>Copyright @ {date} Ritika Solanki. All Right Reserved </p>
          </div>
          <div></div>
        </footer>
      </div>
    </>
  )
}

export default App
