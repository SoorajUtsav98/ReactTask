import "../Styles/Sidebar.css";
import layout from "../assets/images/layout.png";
import pie from "../assets/images/pie.png";
import ticket from "../assets/images/ticket.png";
import setting from "../assets/images/setting.png";

import layout1 from "../assets/images/layout1.png";
import pie1 from "../assets/images/pie1.png";
import ticket1 from "../assets/images/ticket1.png";
import setting1 from "../assets/images/setting1.png";

function Sidebar () {

   
        return(
          <div className="sidebar" onLoad={()=>act1()}>
            <img className="sideicon" id="0" onClick={()=>active(0)} src={layout} alt="layout" />
            <img className="sideicon" id="1" onClick={()=>active(1)} src={pie} alt="pie" />
            <img className="sideicon" id="2" onClick={()=>active(2)} src={ticket} alt="ticket" />
            <img className="sideicon" id="3" onClick={()=>active(3)} src={setting} alt="setting" />
          </div>
        );
    
}



function active(index) {
  let imgSelected = [layout1,pie1,ticket1,setting1];
  let img = [layout,pie,ticket,setting];
  for(let i=0;i<4;i++){
    if(i===index){
      document.getElementById(i).src=imgSelected[i];
     }
    else{
      document.getElementById(i).src=img[i];
    }
  }
}

function act1(){
  document.getElementById(0).src=layout1;
}
export default Sidebar;