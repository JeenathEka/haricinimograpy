import React from "react";
// import "../assets/PageTwoCss.css";
import CardSwap, { Card } from './CardSwap';


export default function PageTwo({ innerRef }) {
  return (
    <section
      ref={innerRef}  // <--- this must be here for scrolling to work
     
    >
    {/* <div class="container" style={{ display: 'flex', gap: '20px' }}> */}
    <div class="item">
      <CardSwap
        cardDistance={100}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}>
        <Card>
          <iframe width="1000px" height="500px" src="https://player.vimeo.com/video/888601366?autoplay=1&loop=1&quality=4K&background=1"  ></iframe>
          {/* <iframe width="1000px" height="500px"  src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&background=1"  ></iframe> */}
        </Card>
        <Card>
          <iframe width="1000px" height="500px" src="https://player.vimeo.com/video/888601366?autoplay=1&loop=1&quality=4K&background=1"  ></iframe>
          {/* <iframe width="1000px" height="500px"  src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&background=1"  ></iframe> */}
        </Card>
        <Card>
          <iframe width="1000px" height="500px" src="https://player.vimeo.com/video/888601366?autoplay=1&loop=1&quality=4K&background=1"  ></iframe>
          {/* <iframe width="1000px" height="500px"  src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&background=1"  ></iframe> */}
        </Card>
      </CardSwap>
    </div>

  {/* </div> */}
    </section>
  );
};