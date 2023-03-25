import React from "react";
import "../css/Info.css";


export default function Info() {
    return (
        <div className="Info">
            <img alt="selfie" src="/images/selfie.jpeg" className="selfie"/>
            <h1 className="Info--Name">LIANG Houdong, Louis</h1>
            <h2 className="Info--Title">Hong Kong University of Science and Technology</h2>
            <h3 className="Info--Website"><a href="https://dongdong3272.github.io/" className="web-link">https://dongdong3272.github.io/</a></h3>
            <div className="container-fluid Info-Buttons">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <a href="mailto:hliangam@connect.ust.hk" type="button" className="btn btn-light Info-EmailButton">
                            <i className="fas fa-envelope"></i>Email
                        </a>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <a href="https://www.linkedin.com/in/dongdong-louis/" type="button" className="btn btn-light Info-LinkedInButton">
                            <i className="fab fa-linkedin"></i>LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}