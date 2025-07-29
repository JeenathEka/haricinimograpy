import React from "react";
import "../assets/PageOneCss.css";
import gifLogo from "../assets/hkFullPicGig.gif";
// function PageOne({ innerRef }) {
//   return (
//     <>
//     <div className="hero-section" ref={innerRef} >
//       <div className="overlay">
//         <div className="content">
//           <h1 className="headline">HK CINEMATOGRAPHER</h1>
//           <div className="underline"></div>
//           <p className="subtext">
//             Enjoy secret offers up to <span className="highlight">-100000%</span> off the best luxury hotels every Sunday.
//           </p>
//           {/* <button className="register-btn">REGISTER</button> */}
//           <img className="gif-modify" src={gifLogo}/>
//           <div className="discover-link">view more works Scroll Down</div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

export default function PageOne({ innerRef }) {
  return (
    <section
      ref={innerRef}  // <--- this must be here for scrolling to work
     
    >
     <div className="hero-section" ref={innerRef} >
      <div className="overlay">
        <div className="content">
          <h1 className="headline">Hari Krishnan</h1>
          <div className="underline"></div>
          <p className="subtext">
            CINEMATOGRAPHER<span className="highlight"> & </span> PHOTOGRAPHER
          </p>
          {/* <button className="register-btn">REGISTER</button> */}
          <img className="gif-modify" src={gifLogo}/>
          <div className="headline">view more works Scroll Down</div>
        </div>
      </div>
    </div>
    </section>
  );
};