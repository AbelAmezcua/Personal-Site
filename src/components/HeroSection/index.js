import React, { useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroP, HeroH1, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";

const Herosection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello I'm Abel a Full Stack Software Developer</HeroH1>
        <HeroP>Please browser my website so you can get to know me</HeroP>
        <HeroBtnWrapper>
          <Button to="/projects" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            View Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Herosection;
