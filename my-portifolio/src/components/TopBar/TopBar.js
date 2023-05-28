import React from "react";
import "./TopBar.scss";

function TopBar({menuOpen, setMenuOpen}) {
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						genius.
					</a>
					<div className="itemContainer">
						<span>+972543920120</span>
					</div>
					<div className="itemContainer">
						<span>diogo.roxo@icloud.com</span>
					</div>
				</div>

				<div className="right">
					<div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
