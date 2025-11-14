import React from "react";


function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){

    return(
       <div className="container mt-5">
        <div className="row ">
            <div className="col-4  p-1">
                <img src={imageURL} alt="img" className="" />
            </div>
            <div className="col-3"></div>
            <div className="col-5  p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo}>Try Demo</a>
                <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                </div>
                <div className="mt-5">
                <a href={googlePlay}><img src="./Media/images/googlePlayBadge.svg" /></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src="./Media/images/appstoreBadge.svg" /></a>
                </div>
                
            </div>
        </div>
       </div>
    )
}


export default LeftSection;

