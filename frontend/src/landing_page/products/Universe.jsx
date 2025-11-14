import React from "react";




function  Universe() {
    

    return(
      <div className="container">
         <div className="row  text-center">
           <h3 className="text-muted mb-3 mt-5">The Zerodha Universe</h3>
           <p className="mt-3">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p> 
          
          <div className="col-4 p-3 mt-5 ">
            <img src="Media\images\zerodhaFundhouse.png" alt="" style={{height:"55px"}} />
            <p className="mt-4  text-muted  text-12 text-light-grey">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
          </div>

           <div className="col-4 p-3  mt-5 ">
            <img src="Media\images\sensibullLogo.svg" alt="" style={{height:"55px"}} />
            <p className="mt-4  text-muted text-12 text-light-grey">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
          </div>

           <div className="col-4 p-3  mt-5 ">
            <img src="Media\images\streakLogo.png" alt="" style={{height:"55px"}} />
            <p className="mt-4  text-muted text-12 text-light-grey">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
          </div>

           <div className="col-4 p-3 mt-5 ">
            <img src="Media\images\smallcaseLogo.png" alt="" style={{height:"55px"}} />
            <p className="mt-4  text-muted text-12 text-light-grey">Thematic investing platform <br />
              that helps you invest in diversified <br />
               baskets of stocks on ETFs.</p>
          </div>

           <div className="col-4 p-3 mt-5 ">
            <img src="Media\images\dittoLogo.png" alt=""  style={{height:"55px"}}/>
            <p className="mt-4  text-muted text-12 text-light-grey">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
          </div>

           <div className="col-4 p-3  mt-5 ">
            <img src="Media\images\goldenpiLogo.png" alt="" style={{height:"55px"}} />
            <p className="mt-4  text-muted text-12 text-light-grey">Bonds trading plateform.</p>
          </div>
         
         
            <button className="p-2 btn btn-primary fs-5" style={{width : "20%",margin : "0 auto"}}>Signup for free</button>
          </div> 
      </div>

    );
}

export default Universe;