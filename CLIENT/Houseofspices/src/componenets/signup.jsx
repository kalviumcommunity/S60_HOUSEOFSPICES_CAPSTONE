import React from "react";

function Signuppage (){
    return(
        <div className="signpage">
             <div>
            <input type="text" placeholder="Full Name"/>
            </div>
            <div>
            <input type="text" placeholder="Nick Name"/>
            </div>
            <div>
            <input type="text" placeholder="Email Id"/>
            </div>
            <div>
            <input type="text" placeholder="Password"/>
            </div>
            <div>
            <button>sign up</button>
            </div>
        </div>
    )
}
export default Signuppage;