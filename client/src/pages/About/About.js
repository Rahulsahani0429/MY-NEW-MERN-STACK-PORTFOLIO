import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="\images\IMG_20231114_122141_641.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am Rahul Kumar Sahani, a passionate MERN Stack Developer with expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I specialize in building dynamic, responsive, and user-friendly web applications, ensuring seamless performance and intuitive user experiences.With hands-on experience in full-stack development, I have worked on various projects, including a Doctor Appointment Booking System and a real-time Weather App, integrating APIs and optimizing performance. My strong problem-solving skills, decision-making abilities, and fluency in both English and Hindi make me an effective communicator and team player.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
