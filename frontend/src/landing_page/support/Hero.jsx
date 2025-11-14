import React from "react";

function Hero() {


    return(
        <section className="container-fluid" id="supportHero">
        <div className= "p-5 " id="supportwrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
        </div>
        <div className=" row p-3  mx-5" >
        <div className="col-6 p-5   ">
            <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
            <input  placeholder="Eg. How do I activate F&O" className="display block" /> <br />
            <a href="" >Track Opening Account</a>
            <a href="" style={{marginLeft:"10px"}}>Track Segment Activation</a>
            <a href="" style={{marginLeft:"10px"}}>Intradat Margin</a>
            <a href="" style={{marginLeft:"10px"}}>Kite user manual</a>
            
        </div>
         <div className="col-6 p-5 ">
             <h1 className="fs-3">featured</h1>
             <ol>
                <li><a href="">current takeovers and Delisting - January 2024</a></li>
                <li> <a href="">Latest intraday leverages - MIS & Co</a></li>
             </ol>
             
           
         </div>
        </div>
       </section>
    )
}

export default Hero;