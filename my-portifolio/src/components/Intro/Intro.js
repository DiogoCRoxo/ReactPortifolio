import React from "react";
import "./Intro.scss";
import { useEffect, useRef } from "react";
  import { init } from "ityped";

function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
      showCursor:true, 
	  backDelay:1000,
	  backSpeed:60,
	  showCursor:true,
      strings:["Developer", "Designer", "Content Creator"],
    })
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/man.png" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi there, I'm </h2>
					<h1>Safak Kacaoglu</h1>
					<h3> Freelancer <span ref={textRef}></span>
					</h3>
				</div>
				<a href="#portifolio">
					<img src="assets/down.png" />
				</a>
			</div>
		</div>
	);
}

export default Intro;
