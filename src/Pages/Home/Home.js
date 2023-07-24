import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import "../Home/home.scss"
import Widgets from "../../Components/Widgets/Widgets"
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Groups2Icon from '@mui/icons-material/Groups2';
import DescriptionIcon from '@mui/icons-material/Description';
import Linechart from "../../Components/Linechart/Linechart";
import Piechart from "../../Components/Piechart/Piechart";
import TableData from "../../Components/Table/Table";
import { Route, Routes } from "react-router-dom";
import Settings from "../Settings/Settings";
export default function Home() {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
      
          <Widgets type="Customer" amount="2,848" change="positive" changeNumber='+6.5%' icon={<Groups2Icon/>} bgcolor={"#F9F4F0"}/>
          <Widgets type="Revenue" amount="$2,344" change="negative" changeNumber='-6.5%' icon={<ShowChartIcon/>} bgcolor={"#EFF8FB"}/>
          <Widgets type="Profit" amount="40%" change="positive" changeNumber='+0.5%' icon={<ShowChartIcon/>} bgcolor={"#FEF2EB"}/>
          <Widgets type="Invoices" amount="1,162" change="positive" changeNumber='+11.5%' icon={<DescriptionIcon/>} bgcolor={"#F0F9F0"}/>
        </div>
        <div className="charts">
          <Linechart/>
          <Piechart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Recent Invoice</div>
          <TableData/>
        </div>
       </div>
     </div>
  )
}
