import React from "react";
import "./qrScanStyles.css";
import { Link } from "react-router-dom";
import QR from "../assets/qr.png";

function qrScan() {
	return (
		<section className="qr_scan_section">
			<div className="qr_home_container">
				<div className="qr_scan_image_div">
					<img src={QR} alt="qr code" className="qr_scan_image" />
                    <Link to="/secretKey" className="">
						<button className="qr_scan_content_btn">
							Can't scan it?
						</button>
					</Link>
				</div>
				<div className="qr_home_content_div">
					<h1 className="qr_home_content_heading">Set up authenticator app</h1>
					<p className="qr_home_content_text">
                    1.  In the Google Authenticator app tap the +<br />
                    2. Choose Scan a QR code
					</p>

					<Link to="/qrHome" className="">
						<button className="qr_home_content_btn">
							Cancel
						</button>
					</Link>

                    <Link to="/enterCode" className="">
						<button className="qr_home_content_btn">
							Next
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default qrScan;
