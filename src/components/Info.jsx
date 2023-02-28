import React from "react";
import "../css/Info.css";

export default function Info() {
    return (
        <div className="Info">
            <img src="/images/photo.jpeg" className="selfie"/>
            <h1 className="Info--Name">Laura Smith</h1>
            <h2 className="Info--Title">Frontend Developer</h2>
            <h3 className="Info--Website">laurasmith.website</h3>
            <div className="container-fluid Info-Buttons">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <button type="button" className="btn btn-light Info-EmailButton">
                            <i className="fas fa-envelope"></i>Email
                        </button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <button type="button" className="btn btn-light Info-LinkedInButton">
                            <i className="fab fa-linkedin"></i>LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}