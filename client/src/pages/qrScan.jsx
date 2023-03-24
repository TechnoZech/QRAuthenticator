import React, {useEffect, useState} from "react";
import "./qrScanStyles.css";
import { Link } from "react-router-dom";

function QrScan() {

	const [secretData, setSecretData] = useState([{}])

	useEffect(()=>{
		fetch("http://localhost:5000/api/register").then(
			Response => Response.json()
		).then(
			data => {
				setSecretData(data)
			}
		)
	}, [])

	const URL = `https://api.qrserver.com/v1/create-qr-code/?data=otpauth://totp/SecretKey?secret=${secretData.secret}`;

	return (

		<section className="qr_scan_section">
			<div className="qr_home_container">
				<div className="qr_scan_image_div">
					<img className="qr_scan_image" src={URL} alt="qr" />
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

export default QrScan;
