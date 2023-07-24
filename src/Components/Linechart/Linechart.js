import { useState ,useEffect } from 'react';
import DisplayLineChart from './DisplayLineChart'
import axios from 'axios'
import './linechart.scss'
export default function Linechart() {
  const[Time,setTime]=useState("7d")
  const[coinHistory,setcoinHistory]=useState([]);
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/qzawljRxB5bYu/history`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: Time
      },
      headers: {
        'X-RapidAPI-Key': '1f6a9db988msha0faaf742b4e34ep1362f1jsna692f3c4e0d1',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    axios.request(options).then((res)=>{
      setcoinHistory(res.data)

    }).catch((err)=>{
      console.log(err)
    })
  },[Time])
 
  return  (
    <div className='chart'>
        <div className="top">
        <h3 className="title">Sales Analytics</h3>
        <div className="button">
        <button onClick={()=>setTime('7d')}>Weekely</button>
        <button onClick={()=>setTime('1y')}>Monthly</button>
        <button onClick={()=>setTime('3y')}>Yearly</button>
       </div>
       </div> 
       <div style={{marginLeft:'15px'}}>
        <DisplayLineChart coinHistory={coinHistory} time={Time}/>
       </div>
     
    </div>
  )
}
