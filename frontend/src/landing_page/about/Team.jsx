import React from "react";

export default function Team() {


    return(
      <div className="container">
        <div className="row p-5  mt-5 border-top ">
            <h1 className="  text-center ">People</h1>
        </div>

         <div className="row p-5  text-center text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
            <div className="col-6 p-5 mb-10">
                
             <img src="./Media/images/abhilash.jpg" alt="Abhilash"  style={{borderRadius: "100%", width:"400px", height:"400px"}} />
             <h4 className="mt-5">Abhilash Mundepi</h4>
             <h6>Founder and CEO Of Stock BAZAR</h6>
        
         </div>
            <div className="col-6 p-5">
             <p>
             Abhilash bootstrapped and founded Stock Bazar in 2010 to overcome the  hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
             </p>
             <p>
               He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
             </p>
             <p>
              Playing Volleyball is his zen.
             </p>
             <p>Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href=""  style={{textDecoration: "none"}}>TradingQnA</a> / <a href=""  style={{textDecoration: "none"}}>Twitter</a> </p>
            </div>
        </div>
      </div>
    );
}