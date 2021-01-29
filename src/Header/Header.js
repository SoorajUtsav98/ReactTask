import "../Styles/Header.css";
import hamburger from "../assets/images/hamburger.jpg";
import bell from "../assets/images/bell.jpg";
import ticket from "../assets/images/ticket.png";

function closeNav(event) {
    document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
}

function openNav(event) {
    document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
}

function toggle(event){
    let y = document.getElementById("arrow");
    let x = document.getElementById("drop");
    x.classList.toggle("mod2");
    y.classList.toggle("mod2");
}

function Header (){

  



        return(
                    
            <header className="header">
                <div id="mySidepanel" className="hamburger">
                <a href="#" className="closebtn" onClick={(event)=>closeNav(event)}>&times;</a>
                </div>
                
                <div className="hamburger1" onClick={(event)=>openNav(event)}>
                    
                    <img className="hamimg" src={hamburger} alt="ham" />
                    </div>
                    
                <div>
                    <span className="spectrum">SPECTRUM</span> MANAGEMENT
                </div>
                <div>
                    <img className="icon11" src={ticket} alt="ticket" />

                    <img className="icon inside" id="bell" onClick={(event)=>toggle(event)} src={bell} alt="notify" />
                    <div id="arrow" className="arrow-up"></div>
                    <div id="drop" className="dropdown"></div>
                    
                </div>
            </header>
        );
    
}

export default Header;