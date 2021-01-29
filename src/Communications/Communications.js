import "../Styles/styles.css";
import Communication from "./Communication/Communication";
import slackmessage from "../assets/images/slackmessage.png";
import rhombus from "../assets/images/rhombus.png";
import woman from "../assets/images/woman.png";
import man1 from "../assets/images/man1.jpg";

function myFunction(event){

  let btnText = document.getElementById("myBtn");
    
  document.getElementsByClassName("communication")[5].classList.toggle("more");
  if(btnText.innerHTML==="more"){
    btnText.innerHTML="less";
  }
  else{
    btnText.innerHTML="more";
  }
}


function Communications (){

  
        return(
            <div className="communications">
                <h3 className="title">Communications</h3>
                <Communication title="Jira Ticket Created" rightTitle="Medium" 
                    content=" Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel, perspiciatis atque!"
                  status="Status: Waiting for Support"
                  lastUpdate="Last Updated: 10:00:00 PST"
                  image={rhombus}
                />
                <Communication title="Slack Message" rightTitle="High" 
                    content=" Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel, perspiciatis atque!"
                  status="Status: Waiting for Support"
                  lastUpdate="Last Updated: 10:00:00 PST"    
                  image={slackmessage} 
                />
                <Communication
                    title="Message" rightTitle="Medium" 
                    content=" Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel, perspiciatis atque!"
                  status="Status: Waiting for Support"
                  lastUpdate="Last Updated: 10:00:00 PST"
                  image={woman}
                />
                <Communication
                    title="Jira Ticket Moved" rightTitle="Medium" 
                    content=" Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel, perspiciatis atque!"
                  status="Status: Waiting for Support"
                  lastUpdate="Last Updated: 10:00:00 PST"
                  image={rhombus}
                />
                <Communication
                    title="DESK-200" rightTitle="Medium" 
                    content=" Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel, perspiciatis atque!"
                  status="Status: Waiting for Support"
                  lastUpdate="Last Updated: 10:00:00 PST"
                  image={man1}
                />
                <div className="communication more">
              <div className="card">
                <div className="card-header">
                  <img className="card-image" src={man1} />
                  <h4 className="card-title">DESK-400</h4>
                  <div className="right-titlemed">Medium</div>
                </div>
                <div className="card-content">
                  <p className="main-card-content">
                    Test confirm OSS for DAY. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vel, perspiciatis atque!

                  </p>
                  <div className="bottomcon">
                  <span className="status">Status: Waiting for Support</span>
                  <span className="last-updated">Last Updated: 10:00:00 PST</span>
                  </div>
                </div>
              </div>
            </div>
            
                 <button  className="morebutton" onClick={(event)=>myFunction(event)} id="myBtn">more</button>
            </div>
        );
    
}

export default Communications;