import React from "react";
import { Link } from "react-router-dom";
import "./qrHomeStyles.css";
import home_hero from "../assets/home-hero.png";

function qrHome() {
	return (
		<>
			<section className="qr_home_section">
				<div className="qr_home_container">
					<div className="qr_home_image_div">
						<img src={home_hero} alt="home-hero" className="qr_home_image"/>
					</div>
					<div className="qr_home_content_div">
						<h1 className="qr_home_content_heading">Authenticator App</h1>
						<p className="qr_home_content_text">
							Instead of waiting for text messages, get verification codes from
							an authenticator app. It works even if your phone is offline. <br /> <br />
							First, download Google Authenticator from the Google Play Store or
							the iOS App Store.
						</p>
                        
                        <Link to="/qrScan" className=""><button className="qr_home_content_btn">Set up authenticator</button></Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default qrHome;


// https://apps.apple.com/us/app/google-authenticator/id388497605
// https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1
