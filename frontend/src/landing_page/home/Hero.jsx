import React from "react";

function Hero() {
    return (
     <div className="container p-5 mb-5">
        <div className="row text-center">
            <div className="col">
                <img src="Media/images/homeHero.png" alt="Hero image" className="mb-5 w-100" />
                <h1 className="mt-5 mb-5"> Invest in everything</h1>
                <p>Online plateform to invest in stocks, derivatives, mutual funds and more</p>
                <button className="p-2 btn btn-primary fs-5" style={{width : "20%",margin : "0 auto"}}>Signup Now</button>
            </div>
        </div>
     </div>
        
    )
}

export default Hero;