import React from 'react';
import "./enterCodeStyles.css";
import { Link } from "react-router-dom";

function EnterCode() {
  return (
    <section className="enterCode_section">
        <div className="enterCode_container">
        <h1 className="enterCode_heading">Set up authenticator app</h1>
				<p className="enter_code_text">Enter the 6-digit code you see in the app</p>
                <input type="text" className="enterCode_input" />
				<div className="secret_key_btns">
                <Link to="/qrScan" className="">
					<button className="qr_home_content_btn">Back</button>
				</Link>
                <Link to="/qrHome" className="">
					<button className="qr_home_content_btn">Cancel</button>
				</Link>
                <Link to="/enterCode" className="">
					<button className="qr_home_content_btn">Verify</button>
				</Link>
                </div>
        </div>
    </section>
  )
}

export default EnterCode