import React from "react";
import "./secretKeyStyles.css";
import { Link } from "react-router-dom";

function secretKey() {
	return (
		<section className="secret_key_section">
			<div className="secret_key_container">
				<h1 className="qr_home_content_heading">Set up authenticator app</h1>
				<p className="qr_home_content_text">
					1. In the Google Authenticator app tap the + then tap Enter a setup key <br /> <br />
					2. Enter your email address and this key (spaces don’t matter):
                  <span className="secret_key">  5hxy fe5d ufuh 63ta qvo5 4vaq opk4 bfnu </span><br /> <br />
                    3. Make sure Time based is selected <br /> <br />
                    4. Tap Add to finish
				</p>

				<div className="secret_key_btns">
                <Link to="/qrScan" className="">
					<button className="qr_home_content_btn">Back</button>
				</Link>
                <Link to="/qrHome" className="">
					<button className="qr_home_content_btn">Cancel</button>
				</Link>
                <Link to="/enterCode" className="">
					<button className="qr_home_content_btn">Next</button>
				</Link>
                </div>
			</div>
		</section>
	);
}

export default secretKey;
