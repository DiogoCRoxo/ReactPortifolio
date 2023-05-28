import React from 'react'
import './TopBar.scss'

function TopBar() {
  return (
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className='logo'>genius.</a>
					<div className='itemContainer'>
            
          </div>
				</div>

				<div className="right">
					<h1>Right</h1>
				</div>
			</div>
		</div>
	);
}

export default TopBar