import React from "react";

function CreateTicket(){

    return(
       <div className="container">
        <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 ">To create a ticket, select a relevent topic</h1>
       
        <div className="col-4 p-5 mt-4 mb-5">
         <h4 className="fs-5"><i class="fa-solid fa-circle-plus"></i>Account Opening</h4>

         <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Onlinne Account Opening</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Offline Account Opening</a><br />
         <a href="" style={{textDecoration:"none", lineHeight:"2.5"  }}>Company, Parternership and HUF Account Opening</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>NRI Account Opening</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Charges at Stock Bazzar</a><br />
         <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>getting Started</a>
        </div>
        <div className="col-4 p-5 mt-4 mb-5">
         <h3 className="fs-5 text-center"><i class="fa-solid fa-user"></i>Your Zerodha Account</h3>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Login credentials</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Account modification and segment addition</a><br />
         <a href="" style={{textDecoration:"none", lineHeight:"2.5"  }}>DP ID and bank details</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Your Profile</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Transfer and conversion of shares</a><br />
         <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>getting Started</a>

        </div>
         <div className="col-4 p-5 mt-4 mb-5">
         <h2 className="fs-5 text-center"><i class="fa-solid fa-chart-simple"></i> Your Zerodha Account</h2>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin leverage, Products and Order types</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Kite web and mobile</a><br />
         <a href="" style={{textDecoration:"none", lineHeight:"2.5"  }}>Trading FAQs</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Corporate actions</a><br />
         <a href="" style={{textDecoration:"none" ,lineHeight:"2.5"}}>Kite API</a><br />
         <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>PI and Other plateforms</a>
        </div>
        </div>
       </div>
    )
}

export default CreateTicket;