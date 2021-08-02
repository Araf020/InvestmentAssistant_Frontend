import React from 'react';
import '../Style.css';



function Footer() {
    return (
        <div className="bottom bg-dark ">
		<div className="container">
		<div className="bottom-menu">
			<div className="first-text text-light pt-4">
				<p>Home|Terms and Conditions </p>
				<p>Copyright @ 2021 Team Crapplet. All rights reserved  </p>
			</div>
			<div className="icon flex ">
				<div className="left-icon flex">
					<i className="fab fa-twitter "></i>
					<i className="fab fa-facebook "></i>
					<i className="fab fa-instagram "></i>
				</div>
				<div className="right-icon flex pb-4">
				<i className="fab fa-twitter "></i>
					<i className="fab fa-facebook "></i>
					<i className="fab fa-instagram "></i>
					
				</div>
			{/*</div>*/}
		</div>
	</div>

        </div>
		</div>
    );
}

export default Footer;

