import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer.","UI/UX Designer."];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText;

    if (isDeleting) {
      updatedText = fullText.substring(0, text.length - 1);
    } else {
      updatedText = fullText.substring(0, text.length + 1);
    }

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => (text.length > 0 ? prevDelta / 2 : period));
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(600);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Shaanil Khatri`} <span className="txt-rotate" dataPeriod="6000" data-rotate='[ "Web Developer.","UI/UX Designer."]'><span className="wrap">{text}</span></span></h1>
                  <p>As a passionate software developer, I have a deep interest in exploring and mastering new technologies. With a solid foundation in programming languages and tools, I am always eager to learn about and adopt the latest advancements in the industry.
                  In summary, my passion for technology and my dedication to staying up-to-date with the latest advancements make me a highly skilled and adaptable software developer.
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                 <Router> 
                  <HashLink to='#connect' style={{ textDecoration: 'none' }}>
                    <button >Let’s Connect<ArrowRightCircle size={25} /></button>
              </HashLink>
              </Router>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
