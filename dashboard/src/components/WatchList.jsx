import React,{useState,useContext} from "react";
import { watchlist } from "../Data/Data";

import {Tooltip, Grow} from '@mui/material';

import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'

import GeneralContext from "./GeneralContext";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement,Legend);
import { Chart as ChartJS, ArcElement,  Legend } from "chart.js";



export default function WatchList() {

  const labels = watchlist.map((subArray) => subArray["name"]);


  const data = {
    labels,
     datasets : [
       {
      label: "Price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
     ]
  }

    return(
        <>
        <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
       </div>

       <ul className="list">
        {
          watchlist.map((stock, index) =>(
            <WatchListItem stock={stock} key={index} />
          ))
        }
       </ul>

       <Doughnut  data={data}/>
       
       </div>
      
     
        </>
    )
}


const WatchListItem = ({stock}) =>{

  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) =>{
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) =>{
    setShowWatchListActions(false);
  }


  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? 'down': 'up'}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down"/> : <KeyboardArrowUp className="up"/> }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions  uid={stock.name}/>}
    </li>
  )

};

const WatchListActions = ({uid}) => {

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
          <button className="buy " style={{marginBottom:"15px"}} >Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell " style={{marginBottom:"15px"}}>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" style={{marginTop:"15px"}} >
            <BarChartOutlined className="icon"></BarChartOutlined>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" style={{marginTop:"15px"}}>
            <MoreHoriz className="icon"></MoreHoriz>
          </button>
        </Tooltip>
      </span>

    </span>
  )

}