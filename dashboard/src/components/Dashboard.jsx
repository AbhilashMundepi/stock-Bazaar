import React from "react";
import WatchList from './WatchList.jsx'
import Funds from './Funds.jsx';
import Apps from './Apps.jsx';
import Positions from './Positions.jsx';
import Holdings from './Holdings.jsx';
import Orders from './Orders.jsx';
import Summery from './Summery.jsx'
import { Route, Routes } from "react-router-dom";
import {GeneralContextProvider} from "./GeneralContext.jsx";

export default function Dashboard() {

    return(
        <div className="dashboard-container">
            <GeneralContextProvider>
              <WatchList />
            </GeneralContextProvider>
           
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summery/>}/>
                    <Route exact path="/orders" element={<Orders/>}/>
                    <Route exact path="/holdings" element={<Holdings/>}/>
                    <Route exact path="/positions" element={<Positions/>}/>
                    <Route exact path="/funds" element={<Funds/>}/>
                    <Route exact path="/apps" element={<Apps/>}/>
                </Routes>
            </div>
        </div>
    )
}