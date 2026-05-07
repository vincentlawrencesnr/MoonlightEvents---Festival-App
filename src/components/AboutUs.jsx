import React, { useEffect } from "react";
import Moonlight from "../assets/MoonRed.png";
import AOS from "aos";
import "aos/dist/aos.css";
import portrait1 from "../assets/potrait1.jpg";

export default function AboutUs() {

 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="container mt-3 pt-5 bg-light">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="" style={{color: '#2b323cff', fontWeight: '700', fontSize: '32px'}}>About Moonlight Events 🌍</h2>
        <p className="lead text-muted mt-3" style={{ fontSize: "18px", fontWeight: "400"}}>
          Connecting cultures, celebrating traditions, and bringing the world together through festivals.
        </p>
      </div>

      <div className="row mb-5">
        <div className="col-12 mb-5" data-aos="fade-down">
          <img
            src="https://unsplash.com/photos/AcmsXGJ7c8U/download?force=true&w=1920"
            className="img-fluid rounded shadow"
            alt="festival crowd"
           style={{ height: "80vh", width: "100%", marginBottom: "10px", objectFit: "cover" }}
          />
        </div>

        {/* our mission section */}

        <div className="col-12 mb-3 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
          <div>
            <h4 className="text-center mt-2" style={{color: '#2b323cff', fontWeight: '700', fontSize: '24px'}}>🌟 Our Mission</h4>
            <p className="text-muted text-center" style={{ fontSize: "17px", fontWeight: "400"}}>
              We aim to strengthen cultural understanding among young people and
              promote appreciation for diverse traditions around the world.
            </p>

            <p className="text-muted text-center" style={{ fontSize: "17px", fontWeight: "400"}}>
              Every festival tells a story — and we bring those stories to life in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="row text-center">

        <div className="col-md-4 mb-4" data-aos="zoom-in">
          <div className="p-4 shadow rounded h-100">
            <h5>🌍 Global Festivals</h5>
            <p className="text-muted">
              Explore celebrations from every continent in one platform.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="p-4 shadow rounded h-100">
            <h5>🎭 Cultural Learning</h5>
            <p className="text-muted">
              Understand the meaning, history, and traditions behind each festival.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="p-4 shadow rounded h-100">
            <h5>📸 Visual Experience</h5>
            <p className="text-muted">
              Discover festivals through immersive images and stories.
            </p>
          </div>
        </div>

      </div>

      {/* TIMELINE */}
       <div className="mb-5 py-4">
         <h3 className="text-center mb-5" data-aos="fade-up" style={{color: '#2b323cff', fontWeight: '700', fontSize: '24px', marginTop: '50px'}}>Our Journey</h3>

         <div className="row text-center">

           <div className="col-md-4" data-aos="fade-up">
             <h6>2023</h6>
             <p className="text-muted">Idea was born 💡</p>
           </div>

           <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
             <h6>2024</h6>
             <p className="text-muted">First festivals launched 🎉</p>
           </div>

           <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
             <h6>2025</h6>
             <p className="text-muted">Global expansion 🌍</p>
           </div>

         </div>
       </div>

       {/* MEET THE TEAM */}
       <div className="mb-5 pb-5">
         <h3 className="text-center  mb-5" data-aos="fade-up" style={{color: '#2b323cff', fontWeight: '700', fontSize: '22px', marginTop: '50px'}}>Meet the Team</h3>

         <div className="row text-center">

           <div className="col-md-4 mb-4" data-aos="flip-left">
             <div className="p-3 shadow rounded">
               <img
                src={portrait1}
                className="rounded-circle mb-2"
                width="100"
                height="100"
                alt="team"
              />
              <h6>Vincent</h6>
              <p className="text-muted">Frontend Developer</p>
            </div>
          </div>

          <div className="col-md-4 mb-4" data-aos="flip-left" data-aos-delay="200">
            <div className="p-3 shadow rounded">
              <img
                src="https://randomuser.me/api/portraits/women/30.jpg"
                className="rounded-circle mb-2"
                width="100"
                alt="team"
              />
              <h6>Chisom</h6>
              <p className="text-muted">Event Coordinator</p>
            </div>
          </div>

          <div className="col-md-4 mb-4" data-aos="flip-left" data-aos-delay="400">
            <div className="p-3 shadow rounded">
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                className="rounded-circle mb-2"
                width="100"
                alt="team"
              />
              <h6>Jamal</h6>
              <p className="text-muted">Designer</p>
            </div>
          </div>

        </div>
      </div>


      <div className="text-center mt-3 mb-5" data-aos="fade-up">
        <h4 className="" style={{color: '#2b323cff', fontWeight: '700', fontSize: '20px'}}>Bringing the world closer, one festival at a time ✨</h4>
        <p className="text-muted" style={{ fontSize: "14px"}}>
          Moonlight Events is more than a platform — it’s a cultural bridge.
        </p>
      </div>

    </div>
  );
}


/*
What is AOS?

AOS stands for:

👉 Animate On Scroll

It’s a small library that:

Animates elements when you scroll down the page
Adds effects like fade, slide, zoom, etc.


🔹 2. Initializing AOS
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

Step-by-step:

👉 useEffect(...)
Runs code when your component loads
From React

👉 AOS.init(...)
Starts the animation library

👉 { duration: 1000 }
Sets animation speed
1000 = 1000 milliseconds = 1 second

👉 [] (empty dependency array)
Means: run this only once when the page loads

🎯 What happens after this?

Once AOS is initialized, you can do this in your HTML/JSX:

<div data-aos="fade-up">
  Hello World
</div>

👉 When you scroll:
This element will fade in from bottom

🎨 Common AOS animations
data-aos="fade-up"
data-aos="fade-down"
data-aos="zoom-in"
data-aos="slide-right"
data-aos="flip-left"

🧠 Simple explanation
AOS = “animate when scrolling”
import = bring the tool
init() = turn it on
data-aos = tell it what to animate
*/