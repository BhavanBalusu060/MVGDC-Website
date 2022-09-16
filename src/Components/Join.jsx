import React from "react";
import '../Styles/SubPages.css'
function Join() {
    return (
        <div className="join-holder">
            <div className="join-holder title">
                <h1>
                    Interested?&#160;
                </h1>
                <span className="join">{"Join MVGDC Today!"}</span>
            </div>
            <button>
                <a style={{color:"gray"}}href="https://docs.google.com/forms/d/e/1FAIpQLSd9Ldq3j7LN2PVrBcEQ4YXU95CEwgJH29wGlp_KsIvhZfq7Ag/viewform?usp=sf_link" target="_blank" >
                Sign up
                </a>
            </button>
        </div>
    );
}



export default Join;