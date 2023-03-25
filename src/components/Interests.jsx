import React from "react";
import "../css/Interests.css";

export default function Interests() {
    return (
        <div className="Interests">
            <h1 className="Interests--Title">Interests</h1>
            <p className="Interests--Content">
                <ul>
                    <li>Video Games</li>
                    <li>Board Games</li>
                    <li>Animes</li>
                    <li>Skating</li>
                    <li>Swimming</li>
                    <li>Reading</li>
                </ul>
            </p>
        </div>
    );
}